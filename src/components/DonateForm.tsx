import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Stack, TextField } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import type { ZodType } from 'zod'
import { z } from 'zod'

import { REQUIRED_ERROR } from '@/constants/message.constant'
import type { DonateFormValues } from '@/interfaces/donate.interface'

import IMaskInput from './IMaskInput'

const schema: ZodType<DonateFormValues> = z.object({
  name: z
    .string({
      required_error: REQUIRED_ERROR,
      invalid_type_error: REQUIRED_ERROR,
    })
    .trim()
    .min(1, REQUIRED_ERROR),
  amount: z
    .string({
      required_error: REQUIRED_ERROR,
      invalid_type_error: REQUIRED_ERROR,
    })
    .trim()
    .min(1, REQUIRED_ERROR),
  message: z
    .string({
      required_error: REQUIRED_ERROR,
      invalid_type_error: REQUIRED_ERROR,
    })
    .trim()
    .min(1, REQUIRED_ERROR),
})

interface DonateFormProps {
  isLoading: boolean
  isSuccess: boolean
  defaultValues: Partial<DonateFormValues>
  onSubmit: (formValues: DonateFormValues) => void
}

const DonateForm = ({
  isLoading,
  isSuccess,
  defaultValues,
  onSubmit,
}: DonateFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors: { name, amount, message },
    },
  } = useForm<DonateFormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  useEffect(() => {
    if (isSuccess) {
      reset(defaultValues)
    }
  }, [defaultValues, reset, isSuccess])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label="Your name / ชื่อของคุณ"
          variant="outlined"
          fullWidth
          {...register('name')}
          slotProps={{
            input: {
              inputProps: {
                maxLength: 30,
              },
            },
          }}
          error={!!name}
          helperText={name?.message}
        />
        <TextField
          label="Amount / จำนวนเงิน"
          variant="outlined"
          fullWidth
          {...register('amount')}
          slotProps={{
            input: {
              inputComponent: IMaskInput,
              inputProps: {
                mask: Number,
                min: 1,
              },
            },
          }}
          error={!!amount}
          helperText={amount?.message}
        />
        <TextField
          label="Message / ข้อความ"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          error={!!message}
          helperText={message?.message}
          {...register('message')}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isLoading}
        >
          เปย์เลย
        </Button>
      </Stack>
    </form>
  )
}

export default DonateForm
