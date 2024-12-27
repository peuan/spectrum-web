import {
  Button,
  Card,
  CardContent,
  Container,
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
      >
        Top up your account credits for a more convenient monthly payment
        experience.
      </Typography>

      <Card
        sx={{
          backgroundColor: '#1C1D1F',
          color: 'common.white',
          textAlign: 'center',
          borderRadius: 3,
          padding: 2,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
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
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontWeight: 600,
            }}
          >
            Topup
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}

export default TopUp
