'use client';
import Link from "next/link";
import Image from "next/image";
import userImg from "../../../../public/img/1144760.png"
import emailImg from "../../../../public/img/327339.png"
import passImg from "../../../../public/img/3099886.png"
import { useState } from "react";

export default function Login() {

    const [signUp, signUpAction] = useState(true);  

    return (
        <main className="box-border p-10 space-y-20 bg-gradient-to-b from-black via-purple-950/30 via-40% to-black to-90%">
            <div className="flex flex-row bg-gradient-to-l from-blue-950/75 to-black to-80% border-l-4 border-purple-400 p-6 rounded-r-full justify-between">
                <Link href="/dashboard" className="text-5xl tracking-widest bg-gradient-to-r from-blue-800 to-purple-500 text-transparent bg-clip-text my-auto hover:animate-pulse animate-infinite">TournaMentor</Link>
                <Link href="../dashboard" className="text-2xl text-purple-300 h-full rounded-full border border-purple-300 p-4 my-auto hover:-translate-x-4 duration-100 hover:bg-purple-500/25 duration-100">
                    Back to Home{" "} 
                    <span className="inline-block">
                        -&gt;
                    </span>
                </Link>
            </div>
            <div className="flex justify-center w-full">
                <div className="flex flex-col justify-center items-center w-[40rem] bg-gradient-to-b from-blue-950 to-black border-b-4 border-purple-400 py-10 rounded-t-[3rem] space-y-14">
                    {signUp === true?
                        <h1 className="text-3xl text-center tracking-wide text-purple-300 font-light border border-purple-300 p-6 rounded-full">Create an account</h1>:
                        <h1 className="text-3xl text-center tracking-wide text-purple-300 font-light border border-purple-300 p-6 rounded-full">Log in</h1>
                    }
                    <form className="space-y-10 w-full px-10">
                        <div className="flex bg-black rounded-full justify-between border-2 border-purple-300">
                            <div className="flex justify-center text-xl text-purple-300 bg-purple-300 h-[3rem] w-[3rem] py-2 rounded-l-full">
                                <Image 
                                    src={userImg}
                                    width={30} 
                                    height={30} 
                                    alt="Username"
                                />
                            </div>
                            <input type="text" placeholder="Username" className="text-xl text-purple-300 bg-black rounded-r-full w-full h-[3rem] pl-2"></input>
                        </div>
                        {signUp === true?
                            <div className="flex bg-black rounded-full justify-between border-2 border-purple-300">
                            <div className="flex justify-center text-xl text-purple-300 bg-purple-300 h-[3rem] w-[3rem] py-2 rounded-l-full">
                                <Image 
                                    src={emailImg}
                                    width={30} 
                                    height={30} 
                                    alt="Username"
                                />
                            </div>
                            <input type="email" placeholder="Email" className="text-xl text-purple-300 bg-black rounded-r-full w-full h-[3rem] pl-2"></input>
                            </div>:
                            null
                        }
                        <div className="flex bg-black rounded-full justify-between border-2 border-purple-300">
                            <div className="flex justify-center text-xl text-purple-300 bg-purple-300 h-[3rem] w-[3rem] py-2 rounded-l-full">
                                <Image 
                                    src={passImg}
                                    width={30} 
                                    height={30} 
                                    alt="Username"
                                />
                            </div>
                            <input type="password" placeholder="Password" className="text-xl text-purple-300 bg-black rounded-r-full w-full h-[3rem] pl-2"></input>
                        </div>
                        <div className="flex justify-center">
                            {signUp === true?
                                <input type="submit" value="Sign Up ->" className="text-2xl text-purple-300 rounded-full border border-purple-300 p-4 mx-auto hover:scale-110 duration-100 hover:bg-purple-500/25 duration-100 hover:cursor-pointer"/>:
                                <input type="submit" value="Log in ->" className="text-2xl text-purple-300 rounded-full border border-purple-300 p-4 mx-auto hover:scale-110 duration-100 hover:bg-purple-500/25 duration-100 hover:cursor-pointer"/>
                            }
                        </div>
                    </form>
                    <div className="flex flex-col w-full justify-center space-y-3">    
                        {signUp === true? 
                            <p className="mx-auto">Already have an account? <Link href="" replace scroll={false} onClick={()=> {signUpAction(!signUp);}} className="text-purple-400">Log in</Link></p>:
                            <p className="mx-auto">Don't have an account? <Link href="" replace scroll={false} onClick={()=> {signUpAction(!signUp);}} className="text-purple-400">Sign Up</Link></p>
                        }
                        <p className="mx-auto">Forgot password? <Link href="" className="text-purple-400">Click here</Link></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row bg-gradient-to-r from-blue-950 to-black to-80% border-r-4 border-purple-400 p-6 rounded-l-full justify-between">
                <div className="flex flex-col text-lg text-purple-300 mx-auto">
                    <h1>Contact: </h1>
                    <h1>About </h1>
                </div>
            </div>
        </main>
    );
}