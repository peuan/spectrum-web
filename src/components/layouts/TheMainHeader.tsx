'use client'

import { Route } from '@/enums/route.enum'
import useUser from '@/hooks/auth/useUser'
import { createClient } from '@/utils/supabase/client.util'
import { Menu, ExpandMore } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Stack,
  Menu as MuiMenu,
  Typography,
  Skeleton,
} from '@mui/material'
import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const menuItems = [
  {
    href: Route.HOW_TO_USE,
    label: 'How to use',
  },
  {
    href: Route.PLAN,
    label: 'Plan',
  },
  {
    href: Route.CONTRACT,
    label: 'Contact',
  },
]

const drawerWidth = 262

const TheMainHeader = () => {
  const router = useRouter()
  const [isSidebar, setSidebarOpen] = useState(false)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const pathname = usePathname()
  const { user, isLoading } = useUser()

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebar)
  }

  const handleSignOut = async () => {
    const supabase = createClient()

    await supabase.auth.signOut()
    window.location.reload()
  }

  const handleGotoAccount = () => {
    router.push(Route.ACCOUNT)
  }

  const menuContent = (
    <List
      sx={{
        '& a': {
          textDecoration: 'unset',
        },
      }}
    >
      {menuItems.map((item, index) => {
        const isActive = pathname === item.href

        return (
          <Link key={index} component={NextLink} href={item.href} passHref>
            <ListItem
              sx={
                isActive
                  ? {
                      color: 'common.white',
                      backgroundColor: 'primary.main',

                      '&:hover': {
                        color: 'common.white',
                        backgroundColor: 'primary.dark',
                      },
                    }
                  : {}
              }
              onClick={handleSidebarToggle}
            >
              <ListItemText
                slotProps={{
                  primary: {
                    sx: { color: 'common.white', fontWeight: '500' },
                  },
                }}
                primary={item.label}
              />
            </ListItem>
          </Link>
        )
      })}
    </List>
  )

  const logo = (
    <NextLink href="/">
      <Stack direction="row" alignItems="center" gap={1}>
        <Avatar sx={{ width: 78, height: 60 }} src="/icons/logo.svg" />
        <Avatar
          variant="square"
          sx={{ width: 100, height: 24 }}
          src="/icons/logo-text.svg"
        />
      </Stack>
    </NextLink>
  )

  return (
    <Box
      component="header"
      sx={{
        zIndex: 3,
        width: '100%',
        position: 'fixed',
        top: 0,
        py: {
          xs: 1,
          md: 1.5,
        },
        background: 'rgba(1, 1, 1, 0.1)',
        backdropFilter: 'blur(1px)',
      }}
    >
      <Container>
        <Stack
          sx={{ minHeight: '40px' }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Stack
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
                alignItems: 'center',
              }}
            >
              <Menu
                sx={{ color: 'common.white' }}
                onClick={handleSidebarToggle}
              />
              <Drawer
                variant="temporary"
                open={isSidebar}
                onClose={handleSidebarToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile
                }}
                sx={{
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
                    p: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(4px)',
                    gap: 2,
                  },
                }}
              >
                {logo}
                <Stack gap={1}>
                  {menuContent}
                  <Button variant="outlined">Login</Button>
                </Stack>
              </Drawer>
            </Stack>
            <Stack
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                alignItems: 'center',
              }}
            >
              {logo}
            </Stack>
          </Box>
          <Stack
            alignItems="center"
            direction="row"
            gap={1}
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            {menuItems.map((menuItem) => {
              return (
                <Link
                  sx={{ color: 'common.white', fontWeight: '500' }}
                  key={menuItem.href}
                  component={NextLink}
                  href={menuItem.href}
                >
                  {menuItem.label}
                </Link>
              )
            })}
            {!user && !isLoading && (
              <Button
                LinkComponent={NextLink}
                href={Route.SIGN_IN}
                variant="outlined"
              >
                Sign in
              </Button>
            )}
            {isLoading && (
              <Skeleton width={80}>
                <Box sx={{ pt: 6 }}></Box>
              </Skeleton>
            )}
            {!!user && !isLoading && (
              <>
                <Box
                  onClick={handleClick}
                  sx={{
                    borderColor: 'primary.main',
                    borderWidth: 2,
                    borderStyle: 'solid',
                    backgroundColor: 'grey.600',
                    borderRadius: '100px',
                    height: '58px',
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    cursor: 'pointer',
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      minWidth: '36px',
                    }}
                  >
                    <Avatar
                      src="/icons/user-01.png"
                      sx={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                      }}
                    />
                  </Button>
                  <Stack>
                    <Typography
                      sx={{ color: 'common.white' }}
                      fontWeight={600}
                      fontSize={16}
                    >
                      {user.email}
                    </Typography>
                    <Typography
                      sx={{ color: 'common.white' }}
                      variant="caption"
                    >
                      0 Credit
                    </Typography>
                  </Stack>

                  <ExpandMore />
                </Box>
                <MuiMenu
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  elevation={0}
                  anchorOrigin={{
                    vertical: 'bottom', // Adjust menu vertical alignment
                    horizontal: 'right', // Adjust menu horizontal alignment
                  }}
                  transformOrigin={{
                    vertical: 'top', // Adjust transformation alignment
                    horizontal: 'right', // Adjust transformation alignment
                  }}
                  open={Boolean(anchorEl)} // Ensure the menu opens only when anchorEl is set
                  sx={{
                    '& .MuiPaper-root': {
                      minWidth: '200px',
                    },
                  }}
                >
                  <MenuItem disableRipple onClick={handleGotoAccount}>
                    Account
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem disableRipple onClick={handleSignOut}>
                    Sign out
                  </MenuItem>
                </MuiMenu>
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default TheMainHeader
