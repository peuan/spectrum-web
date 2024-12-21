import { NextResponse } from 'next/server'

export const GET = () => {
  return NextResponse.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe 2' },
  ])
}
