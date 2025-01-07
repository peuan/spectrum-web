import type { Plan } from '@/interfaces/plan.interface'

export const GET = () => {
  const plans: Plan[] = [
    {
      id: 1,
      title: 'Basic',
      price: 'Free',
      description: 'Best for beginners',
      features: [
        { label: '20 donations/month', active: true },
        { label: 'Ads on page', active: false },
        { label: 'No alert sound edits', active: false },
        { label: 'No cover changes', active: false },
      ],
    },
    {
      id: 2,
      title: 'Pro',
      price: '49',
      description: 'A little more, go further',
      features: [
        { label: '50 donations/month', active: true },
        { label: 'No ads on page', active: true },
        { label: 'Alert sound edits', active: true },
        { label: 'Cover changes', active: true },
      ],
    },
    {
      id: 3,
      title: 'Pro Plus',
      price: '199',
      description: 'Exclusive for professionals',
      features: [
        { label: '120 donations/month', active: true },
        { label: 'No ads on page', active: true },
        { label: 'Alert sound edits', active: true },
        { label: 'Cover changes', active: true },
      ],
      isBordered: true,
    },
    {
      id: 4,
      title: 'Ultra',
      price: '349',
      description: 'Unlock ultimate potential',
      features: [
        { label: 'Unlimited donations', active: true },
        { label: 'No ads on page', active: true },
        { label: 'Alert sound edits', active: true },
        { label: 'Cover changes', active: true },
      ],
      isSpecial: true,
      isBordered: true,
    },
  ]

  return new Response(JSON.stringify(plans), { status: 200 })
}
