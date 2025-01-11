import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardContent, Grid2, TextField } from '@mui/material'
import { useController, useForm } from 'react-hook-form'
import type { ZodType } from 'zod'
import { z } from 'zod'

import { REQUIRED_ERROR } from '@/constants/message.constant'
import type { TopUpFormValues } from '@/interfaces/top-up.interface'

import IMaskInput from './IMaskInput'

const schema: ZodType<TopUpFormValues> = z.object({
  amount: z
    .string({
      required_error: REQUIRED_ERROR,
      invalid_type_error: REQUIRED_ERROR,
    })
    .trim()
    .min(1, REQUIRED_ERROR),
})

interface TopUpFormProps {
  onSubmit: (formValues: TopUpFormValues) => void
}

const TopUpForm = ({ onSubmit }: TopUpFormProps) => {
  const { control, handleSubmit, setValue } = useForm<TopUpFormValues>({
    resolver: zodResolver(schema),
  })
  const amount = useController({ name: 'amount', control })

  const handleSetAmount = (value: string) => {
    setValue('amount', value)
  }

  return (
    <Card component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          {...amount.field}
          value={amount.field.value ?? ''}
          error={!!amount.fieldState.error}
          helperText={amount.fieldState.error?.message}
          label="Amount"
          variant="outlined"
          placeholder="Amount to Top Up"
          sx={{
            '& .MuiInputBase-root': {
              py: 1,
            },
          }}
          slotProps={{
            input: {
              inputComponent: IMaskInput,
              inputProps: {
                mask: Number,
              },
            },
          }}
        />
        <Grid2 container spacing={2}>
          <Grid2
            size={{
              xs: 4,
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
              onClick={() => handleSetAmount('49')}
            >
              +49
            </Button>
          </Grid2>
          <Grid2
            size={{
              xs: 4,
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
              onClick={() => handleSetAmount('199')}
            >
              +199
            </Button>
          </Grid2>
          <Grid2
            size={{
              xs: 4,
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
              onClick={() => handleSetAmount('249')}
            >
              +249
            </Button>
          </Grid2>
        </Grid2>
        <Button
          type="submit"
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
  )
}

export default TopUpForm
