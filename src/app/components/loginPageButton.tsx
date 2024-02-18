'use client'
import Link from "next/link"

export default function LoginPageButton({ text, onClick, href }: {text: string, onClick: any, href: string}) {

    return(
        <Link href={href} replace onClick={onClick} className="text-2xl text-purple-300 h-full rounded-full border border-purple-300 p-4 my-auto hover:-translate-x-4 duration-100 hover:bg-purple-500/25 duration-100">
            {text}{" "} 
            <span className="inline-block">
                -&gt;
            </span>
        </Link>
    );
}