import Link from "next/link";
import Layout from "./components/layout";

export default function Dashboard() {
    return (
        <Layout>
            <div className="flex flex-col bg-gradient-to-b from-blue-950/75 to-black border-b-4 border-purple-400 py-10 rounded-t-[3rem] space-y-10">
                <div className="border border-purple-300 p-8 rounded-full mx-auto">
                    <p className="text-3xl tracking-wide text-purple-300 font-light">
                        TournaMentor is the one-stop-shop for all your tournament-making needs. 
                    </p>
                </div>
                <div className="flex flex-row p-8 columns-4 space-x-5">
                    <div className="text-lg text-purple-300 p-6 border border-purple-400 rounded-[2rem] mx-auto">
                        <p>
                            Create neat & complete tournament brackets by simply entering a list of contestants
                        </p>
                    </div>
                    <div className="text-lg text-purple-300 p-6 border border-purple-400 rounded-[2rem] mx-auto">
                        <p>
                            Make your bracket unique by customizing the colours and adding profile pics 
                        </p>
                    </div>
                    <div className="text-lg text-purple-300 p-6 border border-purple-400 rounded-[2rem] mx-auto">
                        <p>
                            Play through your tournament to determine who stands above the rest
                        </p>
                    </div>
                    <div className="text-lg text-purple-300 p-6 h-[20rem] border border-purple-400 rounded-[2rem] mx-auto">
                        <p>
                            Export your bracket to share with others or display it somewhere else
                        </p>
                    </div>
                </div>
                <div className="flex p-8 mx-auto">
                    <Link href="/pages/tournaments" className="text-2xl text-purple-400 h-full rounded-full border border-purple-400 p-4 my-auto hover:scale-110 duration-100 hover:bg-purple-500/25 duration-100">
                        Get Started -&gt;
                    </Link>
                </div>
            </div>
        </Layout>
    );
}