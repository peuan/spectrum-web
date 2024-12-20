import Pricing from '@/components/Pricing'
import { Container, Grid2, Typography } from '@mui/material'

const Page = () => {
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
        <Grid2
          size={{
            xs: 12,
            md: 6,
            lg: 3,
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
        </Grid2>

        <Grid2
          size={{
            xs: 12,
            md: 6,
            lg: 3,
          }}
        >
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
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            md: 6,
            lg: 3,
          }}
        >
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
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            md: 6,
            lg: 3,
          }}
        >
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
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default Page
