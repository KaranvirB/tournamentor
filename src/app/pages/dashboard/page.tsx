import Link from "next/link";
import Layout from "../../components/layout";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import Header from "@/app/components/header";

export default async function Dashboard() {

    const session = await getServerSession(authOptions)
    console.log(session)

    if (session?.user) {
        return (
            <Layout>
                <Header/>
                <div className="flex flex-col bg-gradient-to-b from-blue-950 to-black border-b-4 border-purple-400 py-10 rounded-t-[3rem] space-y-10">
                    <div className="flex p-8 mx-auto">
                        <Link href="/pages/dashboard/create" className="flex text-2xl text-purple-400 h-full rounded-full border border-purple-400 p-4 my-auto hover:scale-110 duration-100 hover:bg-purple-500/25 duration-100 space-x-2">
                            <h1 className="text-[4rem] tracking-wide text-purple-300 font-light">+</h1>
                            <h1 className="text-3xl tracking-wide text-purple-300 font-light">Create Tournament</h1> 
                        </Link>
                    </div>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <Header/>
            <div className="flex flex-col bg-gradient-to-b from-blue-950 to-black border-b-4 border-purple-400 py-10 rounded-t-[3rem] space-y-10">
                <div className="flex p-8 mx-auto">
                    <Link href="/pages/signup/login" className="flex text-2xl text-purple-400 h-full rounded-full border border-purple-400 p-4 my-auto hover:scale-110 duration-100 hover:bg-purple-500/25 duration-100 space-x-2">
                        <h1 className="text-3xl text-purple-300 font-light">Login to Create Tournament -&gt;</h1> 
                    </Link>
                </div>
            </div>
        </Layout>
    )
    
}