import Layout from "@/app/components/layout";
import CustomInput from "@/app/components/buttons/contestantButton";
import Header from "@/app/components/header";

export default function Create() {
    return(
        <Layout>
            <Header/>
            <div className="flex flex-col bg-gradient-to-b from-blue-950 to-black border-b-4 border-purple-400 px-40 py-20 rounded-t-[3rem] space-y-10">
                <form className="flex flex-col space-y-20">
                    <input type="text" placeholder="Tournament Name" className="flex text-center text-2xl text-purple-400 h-full bg-transparent rounded-full border-2 border-purple-400 p-4 mx-auto hover:scale-110 duration-100 space-x-2" />
                    <CustomInput header="How many contestants will there be?" placeHolder="Custom amount" />
                    <input type="submit" value="Next ->" className="text-2xl text-purple-300 rounded-full border border-purple-300 p-4 mx-auto hover:scale-110 duration-100 hover:bg-purple-500/25 duration-100 hover:cursor-pointer"/>
                </form>
            </div>
        </Layout>
    );
}