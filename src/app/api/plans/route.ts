import { Plan } from '@/interfaces/plan.interface'

export const GET = () => {
  const plans: Plan[] = [
    {
      id: 1,
      title: 'Basic',
      price: 'Free',
      description: 'ดีที่สุดสำหรับผู้เริ่มต้น',
      features: [
        { label: 'โดเนทขึ้นจอ 20 ครั้ง/เดือน', active: true },
        { label: 'มีโฆษณาในหน้ารับเงิน', active: false },
        { label: 'ตั้งค่าเสียงแจ้งเตือนโดเนทไม่ได้', active: false },
        { label: 'เปลี่ยนรูปปก/พื้นหลังไม่ได้', active: false },
      ],
    },
    {
      id: 2,
      title: 'Pro',
      price: '49',
      description: 'เพิ่มเติมเล็กน้อย ไปได้ไกลขึ้น',
      features: [
        { label: 'โดเนทขึ้นจอ 50 ครั้ง/เดือน', active: true },
        { label: 'ปิดโฆษณาในหน้ารับเงิน', active: true },
        { label: 'ตั้งค่าเสียงแจ้งเตือนโดเนท', active: true },
        { label: 'เปลี่ยนรูปปก/พื้นหลัง', active: true },
      ],
    },
    {
      id: 3,
      title: 'Pro Plus',
      price: '199',
      description: 'พิเศษสำหรับระดับโปร',
      features: [
        { label: 'โดเนทขึ้นจอ 120 ครั้ง/เดือน', active: true },
        { label: 'ปิดโฆษณาในหน้ารับเงิน', active: true },
        { label: 'ตั้งค่าเสียงแจ้งเตือนโดเนท', active: true },
        { label: 'เปลี่ยนรูปปก/พื้นหลัง', active: true },
      ],
      isBordered: true,
    },
    {
      id: 4,
      title: 'Ultra',
      price: '349',
      description: 'ปลดล๊อกขีดจำกัดขั้นสุด',
      features: [
        { label: 'โดเนทขึ้นจอ ไม่จำกัด', active: true },
        { label: 'ปิดโฆษณาในหน้ารับเงิน', active: true },
        { label: 'ตั้งค่าเสียงแจ้งเตือนโดเนท', active: true },
        { label: 'เปลี่ยนรูปปก/พื้นหลัง', active: true },
      ],
      isSpecial: true,
      isBordered: true,
    },
  ]

  return new Response(JSON.stringify(plans), { status: 200 })
}
