'use client'
import Link from "next/link"
import { signOut } from "next-auth/react"

const SignOutButton = () => {
    return (
        <><Link onClick={() => signOut()} href="/" className="text-2xl text-purple-300 h-full rounded-full border border-purple-300 p-4 my-auto hover:-translate-x-4 duration-100 hover:bg-purple-500/25 duration-100">Sign Out -&gt;</Link></>
    )
}

export default SignOutButton