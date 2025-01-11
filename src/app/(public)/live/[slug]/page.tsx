'use client'

import { Box, Typography, LinearProgress } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import useGetUserBySlug from '@/hooks/user/useGetUserBySlug'
import { createClient } from '@/utils/supabase/client.util'

const MIN_TTS_AMOUNT = 1
const DISPLAY_DURATION = 5000 // 5 seconds
const supabase = createClient()

const LivePage = () => {
  const param = useParams()
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
  const [isDisplaying, setIsDisplaying] = useState(false)

  const showDonation = useCallback(
    (donation: {
      timestamp: number
      amount: string
      name: string
      message: string
    }) => {
      if (Number(donation.amount) >= MIN_TTS_AMOUNT) {
        playTTS(
          `${donation.name} บริจาค ${donation.amount} บาท: ${donation.message}`
        )
      }

      setTimeout(() => hideDonation(), DISPLAY_DURATION)
    },
    []
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
        (payload: any) => {
          hideDonation()
          const donation = {
            timestamp: payload.new.createdAt,
            amount: payload.new.amount,
            name: payload.new.donator,
            message: payload.new.text,
          }
          setCurrentDonation(donation)
          setIsDisplaying(true)
          showDonation(donation)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(subscription)
    }
  }, [showDonation, user?.id])

  const hideDonation = () => {
    setCurrentDonation(null)
    setIsDisplaying(false)
  }

  const playTTS = async (message: string) => {
    try {
      const response = await fetch(
        `/api/voice?text=${encodeURIComponent(message)}`
      )
      const data = await response.json()
      const audio = new Audio(`data:audio/mp3;base64,${data.audioBase64}`)
      audio.play()
    } catch (error) {
      console.error('Error playing TTS audio:', error)
    }
  }

  isLoading && <div>Loading...</div>
  isError && <div>Error: {isError}</div>
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end', // Align items at the bottom
        height: '100vh',
        bgcolor: 'common.black',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <AnimatePresence>
        {currentDonation && (
          <motion.div
            key="donation"
            initial={{ opacity: 0, y: '100%' }} // Start below the screen
            animate={{ opacity: 1, y: '0%' }} // Slide to the bottom center
            exit={{ opacity: 0, y: '100%' }} // Exit downward
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                textAlign: 'center',
                overflow: 'hidden',
                p: 3,
                mb: 2, // Add margin from the bottom
                borderRadius: 3,
                bgcolor: 'primary.main',
                boxShadow: '0px 4px 15px rgba(0,0,0,0.5)',
                width: '80vw',
                maxWidth: '500px',
                position: 'relative',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: 'secondary.main',
                }}
              >
                🎉 {currentDonation.name} บริจาค {currentDonation.amount} บาท!
                🎉
              </Typography>
              {currentDonation.message && (
                <Typography
                  variant="body1"
                  sx={{
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
                  width: '150px',
                  height: 'auto',
                  mt: 2,
                  filter: 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8))',
                }}
              />
              {/* Progress Bar */}
              <LinearProgress
                variant="determinate"
                value={100}
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '8px',
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: 'secondary.main',
                    animation: `progress ${DISPLAY_DURATION / 1000}s linear`,
                  },
                  '@keyframes progress': {
                    from: { width: '100%' },
                    to: { width: '0%' },
                  },
                }}
              />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default LivePage
