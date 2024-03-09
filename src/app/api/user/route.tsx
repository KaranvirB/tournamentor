import prisma from "@/app/lib/db";
import { NextResponse, NextRequest } from "next/server";
import { hash } from "bcrypt"
import * as z from 'zod';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, username, password } = body;

        // check if email already exists
        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email}
        });

        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "This email is already in use"}, { status: 409})
        }

        const existingUserByUsername = await prisma.user.findUnique({
            where: { username: username }
        });

        if (existingUserByUsername) {
            return NextResponse.json({ user: null, message: "This username is already in use"}, { status: 409})
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username, 
                email,
                password: hashedPassword
            }
        })

        const { password: newPassword, ...rest } = newUser;

        return NextResponse.json({ user: rest, message: "Account created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error, message: "Oops! Looks like something went wrong..." }, { status: 500 });
    }
}