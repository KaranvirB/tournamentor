import prisma from "@/app/lib/db";
import { NextResponse, NextRequest } from "next/server";
import { hash } from "bcrypt"
import * as z from 'zod';
import type { NextApiRequest, NextApiResponse } from 'next'

const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have more than 8 characters'),
});

export async function POST(req: Request) {
    if (req.method === 'POST') {

        const formData = await req.formData()
        const username = formData.get('username') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        // const { email, username, password } = JSON.parse(body);

        // check if email already exists
        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email}
        });

        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "This email is already in use"}, { status: 409 })
        }

        const existingUserByUsername = await prisma.user.findUnique({
            where: { username: username }
        });

        if (existingUserByUsername) {
            return NextResponse.json({ user: null, message: "This username is already in use"}, { status: 409 })
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username: username, 
                email: email,
                password: hashedPassword
            }
        })

        const { password: newPassword, ...rest } = newUser;


        return NextResponse.json({ user: rest, message: "Account created successfully" }, { status: 200 })
    } else {
        return NextResponse.json({ error: Error, message: "Oops! Looks like something went wrong..." }, { status: 500 });
    }
}