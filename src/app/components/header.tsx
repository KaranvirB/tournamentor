import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "../lib/auth"
import { signOut } from "next-auth/react"
import SignOutButton from "./buttons/signOutButton"

const SignUpButton = async () => {

    const session = await getServerSession(authOptions)

    if (session?.user) {
        return (
            <SignOutButton/>
        )
    } else {
        return (
            <Link href="/pages/signup" className="text-2xl text-purple-300 h-full rounded-full border border-purple-300 p-4 my-auto hover:-translate-x-4 duration-100 hover:bg-purple-500/25 duration-100">Login/Sign Up -&gt;</Link>
        )
    }
    
}

const Header = () => {
    return (
        <div className="flex flex-row bg-gradient-to-l from-blue-950/75 to-black to-80% border-l-4 border-purple-400 p-6 rounded-r-full justify-between">
            <Link href="/" className="text-5xl tracking-widest bg-gradient-to-r from-blue-800 to-purple-500 text-transparent bg-clip-text my-auto animate-in fade-in hover:animate-pulse animate-infinite">TournaMentor</Link>
            <SignUpButton/>
        </div>
    )
}

export default Header