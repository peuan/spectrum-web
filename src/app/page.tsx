'use client'

import Pricing from '@/components/Pricing'
import { Box, Container } from '@mui/material'

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
