'use client'

import { Box, Typography, LinearProgress } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

import { createClient } from '@/utils/supabase/client.util'

const MIN_TTS_AMOUNT = 1
const DISPLAY_DURATION = 5000 // 5 seconds
const supabase = createClient()

const LivePage = () => {
  const [currentDonation, setCurrentDonation] = useState<{
    timestamp: number
    amount: string
    name: string
    message: string
  } | null>({
    timestamp: 0,
    amount: '0',
    name: 'Anonymous',
    message: 'สวัสดีครับ',
  })
  const [isDisplaying, setIsDisplaying] = useState(false)
  const [userId, setUserId] = useState(0)

  const showDonation = useCallback((donation: any) => {
    if (Number(donation.amount) >= MIN_TTS_AMOUNT) {
      playTTS(
        `${donation.donorName} บริจาค ${donation.amount} บาท: ${donation.donorMessage}`
      )
    }

    setTimeout(() => hideDonation(), DISPLAY_DURATION)
  }, [])

  useEffect(() => {
    const subscription = supabase
      .channel('db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'DonationTransaction',
          filter: `userId=eq.${userId}`,
        },
        () => {
          hideDonation()
          const donation = {
            timestamp: Date.now(),
            amount: '100',
            name: 'John Doe',
            message: 'Keep up the great work!',
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
  }, [showDonation, userId])

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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#1E1E1E',
        color: 'white',
      }}
    >
      <AnimatePresence>
        {currentDonation && (
          <motion.div
            key="donation"
            initial={{ opacity: 0, scale: 0.9, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: 3,
                borderRadius: 3,
                bgcolor: 'rgba(0, 0, 0, 0.8)',
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
                  color: '#FFD700',
                  textShadow: '2px 2px 5px rgba(255, 215, 0, 0.8)',
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
                    bgcolor: '#FFD700',
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
