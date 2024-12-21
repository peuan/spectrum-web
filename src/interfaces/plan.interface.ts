export interface Feature {
  label: string
  active: boolean
}

export interface Plan {
  id: number
  title: string
  price: string
  description: string
  features: Feature[]
  isBordered?: boolean
  isSpecial?: boolean
}
