'use client'
import { Box } from '@mui/material'
import { useState } from 'react'

const PlayAudioPage = () => {
  const [text, setText] = useState('')

  const handlePlayAudio = async () => {
    const response = await fetch(`/api/voice?text=${encodeURIComponent(text)}`)
    const data = await response.json()
    const audio = new Audio(`data:audio/mp3;base64,${data.audioBase64}`)
    audio.play()
  }

  return (
    <Box sx={{ marginTop: '100px' }}>
      <h1>Text to Speech</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
      />
      <button onClick={handlePlayAudio} disabled={text.trim() === ''}>
        Play Audio
      </button>
    </Box>
  )
}

export default PlayAudioPage
