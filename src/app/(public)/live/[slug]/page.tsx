'use client'

import { Box, Typography, LinearProgress, Stack } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks'

import useGetUserBySlug from '@/hooks/user/useGetUserBySlug'
import { createClient } from '@/utils/supabase/client.util'

const supabase = createClient()

const LivePage = () => {
  const particlesContainer = useRef<any>(null)
  const param = useParams()
  const [progress, setProgress] = useState<number>(100) // Progress value

  const slug = param.slug as string

  const {
    data: user,
    isError,
    isLoading,
  } = useGetUserBySlug({ request: { slug } })

  const [currentDonation, setCurrentDonation] = useState<{
    timestamp: number
    amount: string
    name: string
    message: string
  } | null>(null)

  const hideDonation = useCallback(() => {
    setCurrentDonation(null)
    particlesContainer.current?.stop()
    setProgress(100) // Reset progress for next donation
  }, [])

  const playTTS = useCallback(
    async (message: string): Promise<void> =>
      new Promise(async (resolve) => {
        try {
          const response = await fetch(
            `/api/voice?text=${encodeURIComponent(message)}`
          )
          const data = await response.json()
          const audio = new Audio(`data:audio/mp3;base64,${data.audioBase64}`)

          audio.onloadedmetadata = () => {
            const durationInMilliseconds = audio.duration * 1000
            setProgress(100) // Start the progress at 100%

            // Calculate the interval duration for decrementing progress by 5%
            const stepInterval = durationInMilliseconds / 20 // 20 steps = 5% decrement each step

            const interval = setInterval(() => {
              setProgress((prev) => {
                const nextProgress = prev - 5 // Decrease by 5%
                if (nextProgress <= 0) {
                  clearInterval(interval) // Stop when progress reaches 0
                  return 0
                }
                return nextProgress
              })
            }, stepInterval)
          }

          audio.play()

          audio.onended = () => {
            setProgress(0) // Ensure progress reaches 0 when the audio ends
            resolve() // Resolve the promise when audio finishes
          }

          audio.onerror = (error) => {
            console.error('Error playing TTS audio:', error)
            setProgress(0) // Immediately set progress to 0 in case of error
            resolve() // Resolve the promise to prevent blocking
          }
        } catch (error) {
          console.error('Error playing TTS audio:', error)
          setProgress(0) // Reset progress in case of error
          resolve() // Resolve the promise to prevent blocking
        }
      }),
    []
  )

  const showDonation = useCallback(
    async (donation: {
      timestamp: number
      amount: string
      name: string
      message: string
    }) => {
      setCurrentDonation(donation) // Display the donation
      particlesContainer.current?.start() // Start particles animation

      // Wait for the TTS playback to finish
      await playTTS(
        `${donation.name} บริจาค ${donation.amount} บาท: ${donation.message}`
      )

      // Hide the donation after TTS playback duration
      hideDonation()
    },
    [playTTS, hideDonation]
  )

  useEffect(() => {
    const subscription = supabase
      .channel('db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'DonationTransaction',
          filter: `userId=eq.${user?.id}`,
        },
        async (payload: any) => {
          hideDonation() // Reset any previous donation
          const donation = {
            timestamp: payload.new.createdAt,
            amount: payload.new.amount,
            name: payload.new.donator,
            message: payload.new.text,
          }
          setCurrentDonation(donation)
          particlesContainer.current?.start()
          await showDonation(donation)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(subscription)
    }
  }, [hideDonation, showDonation, user?.id])

  isLoading && <div>Loading...</div>
  isError && <div>Error: {isError}</div>
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        height: '100vh',
        width: '100vw',
      }}
    >
      <AnimatePresence>
        {currentDonation && (
          <motion.div
            key="donation"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Stack
              sx={{
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  fontSize: '2em',
                  color: 'white',
                  textShadow: '0px 0px 10px rgba(255, 255, 255, 0.9)',
                }}
              >
                🎉 {currentDonation.name} บริจาค {currentDonation.amount} บาท!
                🎉
              </Typography>
              {currentDonation.message && (
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '2em',

                    fontStyle: 'italic',
                    color: '#E6E6E6',
                  }}
                >
                  {currentDonation.message}
                </Typography>
              )}
              <Box
                component="img"
                src="/cute-bear.gif"
                alt="Donation Image"
                sx={{
                  mt: 2,
                  width: '489px',
                  filter: 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8))',
                }}
              />
              {/* Progress Bar */}
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  width: '489px',
                  height: '20px',
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: 'secondary.main',
                  },
                }}
              />
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
      {currentDonation && <Fireworks autorun={{ speed: 3 }} />}
    </Box>
  )
}

export default LivePage
