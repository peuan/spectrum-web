import { Box } from '@mui/material'

interface Props {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(/plan-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 108px)',
        width: '100%',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
          zIndex: 1, // Overlay is below children
        }}
      />

      {/* Children */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2, // Children are above the overlay
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
