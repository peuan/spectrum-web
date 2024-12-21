import Pricing from '@/components/Pricing'
import { getPlanList } from '@/services/plan.service'
import { Container, Grid2, Typography } from '@mui/material'

const Page = async () => {
  const plans = await getPlanList()

  return (
    <Container
      sx={{
        paddingTop: '100px',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        textAlign={'center'}
        fontWeight={600}
      >
        สนับสนุนแพลตฟอร์มได้ง่ายๆเพียงแค่สมัครแพลน!
      </Typography>
      <Grid2
        spacing={2}
        container
        sx={{
          pt: 8,
        }}
      >
        {plans.map((plan) => (
          <Grid2
            key={plan.id}
            size={{
              xs: 12,
              md: 6,
              lg: 3,
            }}
          >
            <Pricing
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isBordered={plan.isBordered}
              isSpecial={plan.isSpecial}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  )
}

export default Page
