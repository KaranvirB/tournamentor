import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import db from "./prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db), 
  session: {
    strategy: 'jwt'
  },
  pages: {
        signIn: '/pages/signup/login',
    },
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "email@example.com" },
            password: { label: "Password", type: "password" }
          },

          async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
              return null
            }

            const existingUser = await db.user.findUnique({
              where: { email: credentials?.email }
            })
            if (!existingUser) {
              return null
            }

            const passwordMatch = await compare(credentials.password, existingUser.password)

            if (!passwordMatch) {
              return null
            }

            return {
              id: existingUser.user_id + '',
              username: existingUser.username,
              email: existingUser.email
            }

          }
        })
      ]
}