'use client'

import { Box, Typography, TextField, Button, Stack, Grid2 } from '@mui/material'

import theme from '@/theme'

const SlugPage = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '100vh',
      px: 3,
    }}
  >
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '250px',
        backgroundImage: 'url(/galaxy.jpeg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: {
            xs: 'un',
            md: '-40px',
            lg: '-40px',
          },
          left: {
            xs: '50%',
            md: '10%',
            lg: '10%',
          },
          transform: 'translateX(-50%)',
          width: '150px',
          height: '150px',
          backgroundImage: 'url(/avatar.png)',
          backgroundSize: 'cover',
          borderRadius: '50%',
          border: `4px solid ${theme.palette.common.black}`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </Box>

    {/* Main Content */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        mt: 6,
      }}
    >
      <Grid2
        container
        spacing={3}
        sx={{
          minWidth: '100%',
        }}
      >
        {/* Left Section - รายละเอียด */}
        <Grid2
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Box
            sx={{
              width: '100%',
              padding: 3,
              border: '1px solid #444',
              borderRadius: '8px',
              backgroundColor: '#1A1A1A',
            }}
          >
            <Typography variant="h6">รายละเอียด</Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              สวัสดีครับ
            </Typography>
          </Box>
        </Grid2>

        {/* Right Section - Form */}
        <Grid2
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Box
            sx={{
              width: '100%',
              padding: 3,
              border: '1px solid #444',
              borderRadius: '8px',
              backgroundColor: '#1A1A1A',
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              มาเริ่มต้นการเปย์กับเรา
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Your name / ชื่อของคุณ"
                variant="outlined"
                fullWidth
                defaultValue="Anonymous"
              />
              <TextField
                label="Message / ข้อความ"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                InputProps={{ style: { color: '#FFF' } }}
                InputLabelProps={{ style: { color: '#AAA' } }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: '#536DFE',
                  color: '#FFF',
                  ':hover': { backgroundColor: '#304FFE' },
                }}
              >
                เปย์เลย
              </Button>
            </Stack>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  </Box>
)

export default SlugPage
