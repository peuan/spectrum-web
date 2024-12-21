import NextAuth, { AuthOptions } from 'next-auth'
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [],
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
