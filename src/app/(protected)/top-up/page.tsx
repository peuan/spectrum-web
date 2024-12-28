import {
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  TextField,
  Typography,
} from '@mui/material'

const TopUp = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        textAlign={'center'}
        fontWeight={600}
        sx={{
          fontSize: {
            xs: '24px',
            lg: '36px',
          },
        }}
      >
        Top up your account credits for a more convenient monthly payment
        experience.
      </Typography>

      <Card
        sx={{
          textAlign: 'center',
          width: {
            xs: '100%',
            md: '50%',
          },
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            placeholder="Amount to Top Up"
            sx={{
              '& .MuiInputBase-root': {
                py: 1,
              },
            }}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
          <Grid2 container spacing={2}>
            <Grid2
              size={{
                xs: 4,
                md: 4,
                lg: 4,
              }}
            >
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: 'grey.300',
                  py: 2,
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                +49
              </Button>
            </Grid2>
            <Grid2
              size={{
                xs: 4,
                md: 4,
                lg: 4,
              }}
            >
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: 'grey.300',
                  py: 2,
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                +199
              </Button>
            </Grid2>
            <Grid2
              size={{
                xs: 4,
                md: 4,
                lg: 4,
              }}
            >
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: 'grey.300',
                  py: 2,
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                +249
              </Button>
            </Grid2>
          </Grid2>
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontWeight: 600,
              textTransform: 'none',
            }}
          >
            Top up
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}

export default TopUp
