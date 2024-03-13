'use client'
import Link from "next/link";
import { useState } from "react";
import Layout from "@/app/components/layout";
import SignUpForm from "@/app/components/forms/signupForm";

export default function Login() {

    const [signUp, signUpAction] = useState(true);

    return (
        <Layout>
            <div className="flex justify-center w-full">
                <div className="flex flex-col justify-center items-center w-[40rem] bg-gradient-to-b from-blue-950 to-black border-b-4 border-purple-400 py-10 rounded-t-[3rem] space-y-14">
                    {signUp === true?
                        <h1 className="text-3xl text-center tracking-wide text-purple-300 font-light border border-purple-300 p-6 rounded-full">Create an account</h1>:
                        <h1 className="text-3xl text-center tracking-wide text-purple-300 font-light border border-purple-300 p-6 rounded-full">Log in</h1>
                    }
                    
                    <SignUpForm/>

                    <div className="flex flex-col w-full justify-center space-y-3">    
                        {signUp === true? 
                            <p className="mx-auto">Already have an account? <Link href="" replace scroll={false} onClick={()=> {signUpAction(!signUp);}} className="text-purple-400">Log in</Link></p>:
                            <p className="mx-auto">Don't have an account? <Link href="" replace scroll={false} onClick={()=> {signUpAction(!signUp);}} className="text-purple-400">Sign Up</Link></p>
                        }
                        <p className="mx-auto">Forgot password? <Link href="" className="text-purple-400">Click here</Link></p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
