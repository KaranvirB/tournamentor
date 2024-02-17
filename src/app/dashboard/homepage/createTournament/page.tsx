import Link from "next/link";
import Layout from "@/app/components/layout";

export default function CreateTournament() {
    return(
        <Layout>
            <div className="flex flex-col bg-gradient-to-b from-blue-950 to-black border-b-4 border-purple-400 py-10 rounded-t-[3rem] space-y-10">
                <form>
                    <div>
                        <h3>How many contestants will there be?</h3>
                        <input type="text" placeholder="# of contestants"></input>
                    </div>
                </form>
            </div>
        </Layout>
    );
}