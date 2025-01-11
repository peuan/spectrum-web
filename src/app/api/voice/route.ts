import * as googleTTS from 'google-tts-api'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get('text')
  const lang = searchParams.get('lang') || 'th'
  const slow = searchParams.get('slow') === 'true'

  if (!text) {
    return NextResponse.json(
      { error: 'Text parameter is required' },
      { status: 400 }
    )
  }

  try {
    const base64Audio = await googleTTS.getAudioBase64(text, {
      lang,
      slow,
      host: 'https://translate.google.com',
      timeout: 10000,
    })
    return NextResponse.json({ audioBase64: base64Audio })
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch audio' },
      { status: 500 }
    )
  }
}
