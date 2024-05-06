'use client'
import Link from "next/link";
import { useState } from "react";
import Layout from "@/app/components/layout";
import LogInForm from "@/app/components/forms/loginForm";
import Header from "@/app/components/header";

export default function Login() {

    const [signUp, signUpAction] = useState(true);

    return (
        <Layout>
            <div className="flex flex-row bg-gradient-to-l from-blue-950/75 to-black to-80% border-l-4 border-purple-400 p-6 rounded-r-full justify-between">
                <Link href="/" className="text-5xl tracking-widest bg-gradient-to-r from-blue-800 to-purple-500 text-transparent bg-clip-text my-auto animate-in fade-in hover:animate-pulse animate-infinite">TournaMentor</Link>
                <Link href="/" className="text-2xl text-purple-300 h-full rounded-full border border-purple-300 p-4 my-auto hover:-translate-x-4 duration-100 hover:bg-purple-500/25 duration-100">Back to Home -&gt;</Link>
            </div>
            <div className="flex justify-center w-full">
                <div className="flex flex-col justify-center items-center w-[40rem] bg-gradient-to-b from-blue-950 to-black border-b-4 border-purple-400 py-10 rounded-t-[3rem] space-y-14">
                    <h1 className="text-3xl text-center tracking-wide text-purple-300 font-light border border-purple-300 p-6 rounded-full">Log in</h1>
                    
                    <LogInForm/>

                    <div className="flex flex-col w-full justify-center space-y-3">    
                        <p className="mx-auto">Don't have an account? <Link href="/pages/signup" replace scroll={false} className="text-purple-400">Sign Up</Link></p>
                        <p className="mx-auto">Forgot password? <Link href="" className="text-purple-400">Click here</Link></p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
