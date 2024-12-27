import Paymentcard from '@/components/PaymentCard'
import ReviewsCard from '@/components/ReviewsCard'
import { Container, Box, Grid2 } from '@mui/material'

const Page = () => {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/bg-1.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/*login card*/}
      </Box>

      {/*payment card*/}
      <Container>
        <Grid2
          spacing={2}
          container
          sx={{
            pt: 8,
          }}
        >
          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 6,
            }}
          >
            <Paymentcard
              title="TrueMoney Voucher"
              quote1="ทรูมันนี่ อังเปา"
              quote2="กับเบอร์ที่คุณยืนยัน"
            />
          </Grid2>

          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 6,
            }}
          >
            <Paymentcard
              title="Verify Slip"
              quote1="ยืนยันสลิปธนาคาร"
              quote2="กับที่อยู่การรับเงินที่คุณตั้งค่าไว้"
            />
          </Grid2>

          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 6,
            }}
          >
            <Paymentcard
              title="PromptPay"
              quote1="ยืนยันสลิปพร้อมเพย์"
              quote2="กับที่อยู่การรับเงินที่คุณตั้งค่าไว้"
            />
          </Grid2>
        </Grid2>
      </Container>

      {/*reviews card*/}
      <Container>
        <Grid2
          spacing={2}
          container
          sx={{
            pt: 8,
          }}
        >
          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 4,
            }}
          >
            <ReviewsCard
              score={5}
              comment="Lorem ipsum dolor sit amet consectetur. Faucibus fermentum donec quam donec arcu leo posuere tempor feugiat. Odio eu velit feugiat mi est. Urna odio in senectus pellentesque lacus varius. Et sed."
              profilePic="/icons/test-profilepic.svg"
              name="Robert L."
            />
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 4,
            }}
          >
            <ReviewsCard
              score={4}
              comment="Lorem ipsum dolor sit amet consectetur. Faucibus fermentum donec quam donec arcu leo posuere tempor feugiat. Odio eu velit feugiat mi est. Urna odio in senectus pellentesque lacus varius. Et sed."
              profilePic="/icons/test-profilepic.svg"
              name="Robert L."
            />
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 4,
            }}
          >
            <ReviewsCard
              score={4.5}
              comment="Lorem ipsum dolor sit amet consectetur. Faucibus fermentum donec quam donec arcu leo posuere tempor feugiat. Odio eu velit feugiat mi est. Urna odio in senectus pellentesque lacus varius. Et sed."
              profilePic="/icons/test-profilepic.svg"
              name="Robert L."
            />
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
}

export default Page
