import { ReactNode } from "react";
import Link from "next/link";

/* 
*  This is the layout of most pages on the site 
*  It contains components of the site which are consistent with multiple pages 
*  This allows for less repetition of code across the project
*/

export default function Layout({children,}: Readonly<{children:ReactNode;}>) {
    return (
        <main className="flex flex-col h-screen p-10 space-y-10 justify-between bg-gradient-to-b from-black via-purple-950/40 via-40% to-black to-90%">

            {/* HEADER */}
            
            <div className="flex flex-row bg-gradient-to-l from-blue-950/75 to-black to-80% border-l-4 border-purple-400 p-6 rounded-r-full justify-between">
                <Link href="/dashboard" className="text-5xl tracking-widest bg-gradient-to-r from-blue-800 to-purple-500 text-transparent bg-clip-text my-auto animate-in fade-in hover:animate-pulse animate-infinite">TournaMentor</Link>
                <Link href="/dashboard/login" className="text-2xl text-purple-300 h-full rounded-full border border-purple-300 p-4 my-auto hover:-translate-x-4 duration-100 hover:bg-purple-500/25 duration-100">
                    Login / Sign Up{" "} 
                    <span className="inline-block">
                        -&gt;
                    </span>
                </Link>
            </div>

            {/* This is where the main contents of the page go */}
            
            <div className="flex-box">
                {children}
            </div>
            
            {/* FOOTER (WIP) */}

            <div className="flex flex-box bg-gradient-to-r from-blue-950/75 to-black to-80% border-r-4 border-purple-400 p-6 rounded-l-full">
                <div className="flex flex-col text-lg text-purple-300 mx-auto">
                    <h1>Contact: </h1>
                    <h1>About </h1>
                </div>
            </div>

        </main>
    );
} 