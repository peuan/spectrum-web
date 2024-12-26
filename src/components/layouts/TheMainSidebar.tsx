'use client'

import { Route } from '@/enums/route.enum'
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
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

const menuItems = [
  { label: 'Dashboard', route: Route.DASHBOARD },
  { label: 'Account', route: Route.ACCOUNT },
  { label: 'Invoices', route: Route.INVOICES },
  { label: 'Donate' },
  { label: 'Page', route: Route.PAGE },
  { label: 'Payment', route: Route.PAYMENT },
  { label: 'Widgets', route: Route.WIDGETS },
  { label: 'Histories' },
  { label: 'Donate History', route: Route.DONATE_HISTORY },
  { label: 'Rent Session', route: Route.RENT_SESSION },
  { label: 'Rent History', route: Route.RENT_HISTORY },
]

interface TheMainSidebarProps {
  children: React.ReactNode
  title: string
}

const TheMainSidebar = ({ title, children }: TheMainSidebarProps) => {
  const pathname = usePathname()

  const sideMenuList = React.useMemo(() => {
    return (
      <List sx={{ py: 0 }}>
        {menuItems.map((item) => (
          <ListItem disablePadding key={item.label}>
            {item.route ? (
              <ListItemButton
                LinkComponent={Link}
                href={item.route}
                sx={{ px: 4 }}
                selected={pathname === item.route}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ) : (
              <ListItemText
                sx={{
                  height: '48px',
                  m: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                primary={item.label}
                slotProps={{
                  primary: {
                    sx: {
                      color: 'grey.400',
                      textAlign: 'center',
                      fontWeight: 700,
                    },
                  },
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    )
  }, [pathname])

  return (
    <Container
      sx={{
        pt: { xs: 9, md: 10, lg: 11 },
      }}
    >
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Typography variant="h3" color="gradient" textAlign="center">
            {title}
          </Typography>
        </Grid2>
        <Grid2 container size={12}>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                bgcolor: 'grey.600',
                borderRadius: 2,
                overflow: 'hidden',
                position: 'sticky',
                top: 88,
              }}
            >
              {sideMenuList}
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 9 }}>{children}</Grid2>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default TheMainSidebar
