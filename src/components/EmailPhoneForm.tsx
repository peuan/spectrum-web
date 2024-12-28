'use client'

import { EMAIL_ERROR, REQUIRED_ERROR } from '@/constants/message.constant'
import { EmailPhoneFormValues } from '@/interfaces/account.interface'
import { Box, Button, Grid2, TextField, Typography } from '@mui/material'
import { z, ZodType } from 'zod'
import { useController, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import IMaskInput from './IMaskInput'

const schema: ZodType<EmailPhoneFormValues> = z.object({
  email: z
    .string({
      required_error: REQUIRED_ERROR,
      invalid_type_error: REQUIRED_ERROR,
    })
    .trim()
    .email(EMAIL_ERROR)
    .min(1, REQUIRED_ERROR),
  phone: z
    .string({
      required_error: REQUIRED_ERROR,
      invalid_type_error: REQUIRED_ERROR,
    })
    .trim()
    .min(1, REQUIRED_ERROR),
})

interface EmailPhoneFormProps {
  defaultValues?: Partial<EmailPhoneFormValues>
  onSubmit: (formValues: EmailPhoneFormValues) => void
}

const EmailPhoneForm = ({ defaultValues, onSubmit }: EmailPhoneFormProps) => {
  const { control, handleSubmit } = useForm<EmailPhoneFormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  })
  const email = useController({ name: 'email', control })
  const phone = useController({ name: 'phone', control })

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Typography variant="h6">Setting Email and Phone</Typography>
        </Grid2>
        <Grid2 size={12}>
          <TextField
            {...email.field}
            value={email.field.value ?? ''}
            error={!!email.fieldState.error}
            helperText={email.fieldState.error?.message}
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
            {...phone.field}
            value={phone.field.value ?? ''}
            error={!!phone.fieldState.error}
            helperText={phone.fieldState.error?.message}
            fullWidth
            label="Phone Number"
            variant="outlined"
            placeholder="Fill in phone number"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              input: {
                inputComponent: IMaskInput,
                inputProps: {
                  mask: '(000) 000-0000',
                },
              },
            }}
          />
        </Grid2>
        <Grid2 size={12}>
          <Button type="submit" variant="contained" fullWidth>
            Save
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default EmailPhoneForm
