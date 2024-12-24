'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import {
  Box,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'

const menuItems = [
  { label: 'Dashboard', route: '/dashboard' },
  { label: 'Account', route: '/account' },
  { label: 'Invoices', route: '/invoices' },
  { label: 'Page', route: '/page' },
  { label: 'Payment', route: '/payment' },
  { label: 'Widgets', route: '/widgets' },
  { label: 'Donate History', route: '/donate-history' },
  { label: 'Rent Session', route: '/rent-session' },
  { label: 'Rent History', route: '/rent-history' },
]

const TheMainSidebar = ({ children }: React.PropsWithChildren) => {
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (index: number, route: string) => {
    setSelectedIndex(index)
    router.push(route)
  }

  return (
    <Container
      sx={{
        pt: { xs: 9, md: 10, lg: 11 },
      }}
    >
      <Grid2 container spacing={3}>
        <Grid2 size={12}>
          <Typography variant="h3" color="gradient" textAlign="center">
            Account
          </Typography>
        </Grid2>
        <Grid2 container size={12}>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                bgcolor: 'grey.600',
                borderRadius: 2,
                position: 'sticky',
                top: 88,
              }}
            >
              <List>
                {menuItems.map((item, index) => (
                  <ListItem disablePadding key={item.label}>
                    <ListItemButton
                      selected={selectedIndex === index}
                      onClick={() => handleListItemClick(index, item.route)}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 9 }}>{children}</Grid2>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default TheMainSidebar
