'use client'
import Image from "next/image";
import userImg from "../../../../public/img/1144760.png"
import emailImg from "../../../../public/img/327339.png"
import passImg from "../../../../public/img/3099886.png"
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

export default function LogInForm() {

    const router = useRouter();

    async function onSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const values = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }

        const signInData = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false
        })

        if (signInData?.error) {
            console.log(signInData.error)
        } else {
            router.push('/pages/dashboard')
        }
    }
    
    return (
        <form onSubmit={onSubmit} className="space-y-10 w-full px-10">
            <div className="flex bg-black rounded-full justify-between border-2 border-purple-300">
                <div className="flex justify-center text-xl text-purple-300 bg-purple-300 h-[3rem] w-[3rem] py-2 rounded-l-full">
                    <Image 
                        src={emailImg}
                        width={30} 
                        height={30} 
                        alt="Email"
                    />
                </div>
                <input 
                    type="email"
                    placeholder="Email" 
                    name="email"
                    className="text-xl text-purple-300 bg-black rounded-r-full w-full h-[3rem] pl-2">
                </input>
            </div>
            <div className="flex bg-black rounded-full justify-between border-2 border-purple-300">
                <div className="flex justify-center text-xl text-purple-300 bg-purple-300 h-[3rem] w-[3rem] py-2 rounded-l-full">
                    <Image 
                        src={passImg}
                        width={30} 
                        height={30} 
                        alt="Password"
                    />
                </div>
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password" 
                    className="text-xl text-purple-300 bg-black rounded-r-full w-full h-[3rem] pl-2">
                </input>
            </div>
            <div className="flex justify-center">
                <input 
                    type="submit" 
                    value="Log In ->"
                    className="text-2xl text-purple-300 rounded-full border border-purple-300 p-4 mx-auto hover:scale-110 duration-100 hover:bg-purple-500/25 duration-100 hover:cursor-pointer"
                />
            </div>
        </form>
    );
}
