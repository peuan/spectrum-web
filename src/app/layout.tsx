import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme'
import TheMainLayout from '@/components/layouts/TheMainLayout'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getQueryClient } from '@/libs/react-query.lib'
import ReactQueryProvider from './providers/ReactQueryProvider'

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-thai',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const queryClient = getQueryClient()

  const dehydratedState = dehydrate(queryClient)
  // The dehydrated state is a serialized version of the query client state.
  // It is used to rehydrate the query client on the client side.

  return (
    <html lang="en">
      <body className={notoSansThai.className}>
        <AppRouterCacheProvider>
          <ReactQueryProvider>
            <HydrationBoundary state={dehydratedState}>
              <ThemeProvider theme={theme}>
                <TheMainLayout>{children}</TheMainLayout>
              </ThemeProvider>
            </HydrationBoundary>
          </ReactQueryProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
