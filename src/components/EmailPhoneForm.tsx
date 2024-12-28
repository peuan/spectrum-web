import { Button, Grid2, TextField } from '@mui/material'

const EmailPhoneForm = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          placeholder="Fill in email address"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      </Grid2>
      <Grid2 size={12}>
        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          placeholder="Fill in phone number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      </Grid2>
      <Grid2 size={12}>
        <Button variant="contained" fullWidth>
          Save
        </Button>
      </Grid2>
    </Grid2>
  )
}

export default EmailPhoneForm
