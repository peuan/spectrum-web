'use client'

import Pricing from '@/components/Pricing'
import { Box, Container } from '@mui/material'
import LoginCard from '@/components/loginCard'
import ReviewsCard from '@/components/reviewsCard'
import PaymentCard from '@/components/PaymentCard'

export default function Home() {
  return (
    <Box
      sx={{
        pt: {
          xs: '60px',
          md: '84px',
        },
      }}
    >
      {/* test loginCard, reviewsCard and PaymentCard */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          mb: 2,
        }}
      >
        <LoginCard />

        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <ReviewsCard
            score={5}
            comment="Lorem ipsum dolor sit amet consectetur. Faucibus fermentum donec quam donec arcu leo posuere tempor feugiat. Odio eu velit feugiat mi est. Urna odio in senectus pellentesque lacus varius. Et sed."
            profilePic="/icons/test-profilepic.svg"
            name="Robert L."
          />

          <ReviewsCard
            score={3.5}
            comment="Lorem ipsum dolor sit amet consectetur. Faucibus fermentum donec quam donec arcu leo posuere tempor feugiat. Odio eu velit feugiat mi est. Urna odio in senectus pellentesque lacus varius. Et sed."
            profilePic="/icons/test-profilepic.svg"
            name="Robert L."
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <PaymentCard
            title="TrueMoney Voucher"
            quote1="ทรูมันนี่ อังเปา"
            quote2="กับเบอร์ที่คุณยืนยัน"
          />
          <PaymentCard
            title="PromptPay"
            quote1="ยืนยันสลิปพร้อมเพย์"
            quote2="กับที่อยู่การรับเงินที่คุณตั้งค่าไว้"
          />
        </Box>
      </Box>
      {/* end of test loginCard, reviewsCard and PaymentCard */}
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            gap: 2,
          }}
        >
          <Pricing
            title="Basic"
            price="Free"
            description="ดีที่สุดสำหรับผู้เริ่มต้น"
            features={[
              { label: 'โดเนทขึ้นจอ 20 ครั้ง/เดือน', active: true },
              { label: 'มีโฆษณาในหน้ารับเงิน', active: false },
              { label: 'ตั้งค่าเสียงแจ้งเตือนโดเนทไม่ได้', active: false },
              { label: 'เปลี่ยนรูปปก/พื้นหลังไม่ได้', active: false },
            ]}
          />

          <Pricing
            title="Pro"
            price="49"
            description="เพิ่มเติมเล็กน้อย ไปได้ไกลขึ้น"
            features={[
              { label: 'โดเนทขึ้นจอ 50 ครั้ง/เดือน', active: true },
              { label: 'ปิดโฆษณาในหน้ารับเงิน', active: true },
              { label: 'ตั้งค่าเสียงแจ้งเตือนโดเนท', active: true },
              { label: 'เปลี่ยนรูปปก/พื้นหลัง', active: true },
            ]}
          />

          <Pricing
            title="Pro Plus"
            isBordered={true}
            price="199"
            description="พิเศษสำหรับระดับโปร"
            features={[
              { label: 'โดเนทขึ้นจอ 120 ครั้ง/เดือน', active: true },
              { label: 'ปิดโฆษณาในหน้ารับเงิน', active: true },
              { label: 'ตั้งค่าเสียงแจ้งเตือนโดเนท', active: true },
              { label: 'เปลี่ยนรูปปก/พื้นหลัง', active: true },
            ]}
          />

          <Pricing
            isSpecial={true}
            isBordered={true}
            title="Ultra"
            price="249"
            description="ปลดล๊อกขีดจำกัดขั้นสุด"
            features={[
              { label: 'โดเนทขึ้นจอ ไม่จำกัด', active: true },
              { label: 'ปิดโฆษณาในหน้ารับเงิน', active: true },
              { label: 'ตั้งค่าเสียงแจ้งเตือนโดเนท', active: true },
              { label: 'เปลี่ยนรูปปก/พื้นหลัง', active: true },
            ]}
          />
        </Box>
      </Container>
    </Box>
  )
}
