'use client'

import { Box, Typography, LinearProgress } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import type { Container, Engine } from 'tsparticles-engine'

import useGetUserBySlug from '@/hooks/user/useGetUserBySlug'
import { createClient } from '@/utils/supabase/client.util'

const MIN_TTS_AMOUNT = 1
const supabase = createClient()

const LivePage = () => {
  const particlesContainer = useRef<any>(null)
  const param = useParams()
  const [ttsDuration, setTtsDuration] = useState<number>(0) // TTS duration in milliseconds

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
  }, [])
  const showDonation = useCallback(
    async (donation: {
      timestamp: number
      amount: string
      name: string
      message: string
    }) => {
      if (Number(donation.amount) >= MIN_TTS_AMOUNT) {
        await playTTS(
          `${donation.name} บริจาค ${donation.amount} บาท: ${donation.message}`
        )
      }

      // Start the progress bar animation
      setTimeout(() => {
        hideDonation() // Hide everything immediately after the progress bar reaches 0
      }, ttsDuration) // Sync with TTS playback duration
    },
    [hideDonation, ttsDuration]
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

  const playTTS = async (message: string): Promise<void> =>
    new Promise(async (resolve, _) => {
      try {
        const response = await fetch(
          `/api/voice?text=${encodeURIComponent(message)}`
        )
        const data = await response.json()
        const audio = new Audio(`data:audio/mp3;base64,${data.audioBase64}`)
        audio.onloadedmetadata = () => {
          setTtsDuration(audio.duration * 1000) // Duration in milliseconds
        }

        audio.play()

        audio.onended = () => {
          resolve() // Resolve the promise when audio finishes
        }
        audio.onerror = (error) => {
          console.error('Error playing TTS audio:', error)
          resolve() // Still resolve even if there's an error
        }
      } catch (error) {
        console.error('Error playing TTS audio:', error)
        resolve() // Resolve the promise to prevent blocking
      }
    })

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      container?.stop()
    },
    []
  )

  isLoading && <div>Loading...</div>
  isError && <div>Error: {isError}</div>
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '100vh',
        color: 'white',
        overflow: 'hidden',
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
            <Box
              sx={{
                textAlign: 'center',
                p: 3,
                mb: 2,
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
                    animation: `progress ${ttsDuration / 1000}s linear`,
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
      {/* Fire Sparkles */}
      <Particles
        container={particlesContainer}
        id="tsparticles"
        loaded={particlesLoaded}
        init={particlesInit}
        options={{
          fullScreen: {
            zIndex: 1,
          },
          emitters: {
            position: {
              x: 50,
              y: 100,
            },
            rate: {
              quantity: 5,
              delay: 0.15,
            },
          },
          particles: {
            color: {
              value: ['#1E00FF', '#FF0061', '#E1FF00', '#00FF9E'],
            },
            move: {
              decay: 0.05,
              direction: 'top',
              enable: true,
              gravity: {
                enable: true,
              },
              outModes: {
                top: 'none',
                default: 'destroy',
              },
              speed: {
                min: 50,
                max: 100,
              },
            },
            number: {
              value: 0,
            },
            opacity: {
              value: 1,
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: 'random',
              animation: {
                enable: true,
                speed: 30,
              },
            },
            tilt: {
              direction: 'random',
              enable: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 30,
              },
            },
            size: {
              value: 3,
              animation: {
                enable: true,
                startValue: 'min',
                count: 1,
                speed: 16,
                sync: true,
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 25,
              },
              enlighten: {
                enable: true,
                value: 25,
              },
              enable: true,
              speed: {
                min: 5,
                max: 15,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              speed: {
                min: -7,
                max: 7,
              },
            },
            shape: {
              type: ['circle', 'square'],
              options: {},
            },
          },
          responsive: [
            {
              maxWidth: 1024,
              options: {
                particles: {
                  move: {
                    speed: {
                      min: 33,
                      max: 66,
                    },
                  },
                },
              },
            },
          ],
        }}
      />
    </Box>
  )
}

export default LivePage
