'use client'
import Link from "next/link";
import Image from "next/image";
import userImg from "../../../public/img/1144760.png"
import emailImg from "../../../public/img/327339.png"
import passImg from "../../../public/img/3099886.png"
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have more than 8 characters'),
  });

  export default function SignUpForm() {

    const [getUser, setUser] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getPass, setPass] = useState("");

    const formData = {
        username: getUser,
        email: getEmail,
        password: getPass
    }

    const onSubmit = async () => {

        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({formData})

        })
        
    }
    
    return (
        <form onSubmit={() => (onSubmit)} className="space-y-10 w-full px-10">
            <div className="flex bg-black rounded-full justify-between border-2 border-purple-300">
                <div className="flex justify-center text-xl text-purple-300 bg-purple-300 h-[3rem] w-[3rem] py-2 rounded-l-full">
                    <Image 
                        src={userImg}
                        width={30} 
                        height={30} 
                        alt="Username"
                    />
                </div>
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="username"
                    value={getUser}
                    onChange={(e) => setUser(e.target.value)}
                    className="text-xl text-purple-300 bg-black rounded-r-full w-full h-[3rem] pl-2">
                </input>
            </div>
                <div className="flex bg-black rounded-full justify-between border-2 border-purple-300">
                    <div className="flex justify-center text-xl text-purple-300 bg-purple-300 h-[3rem] w-[3rem] py-2 rounded-l-full">
                        <Image 
                            src={emailImg}
                            width={30} 
                            height={30} 
                            alt="Username"
                        />
                    </div>
                    <input 
                        type="email"
                        placeholder="Email" 
                        name="email"
                        value={getEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-xl text-purple-300 bg-black rounded-r-full w-full h-[3rem] pl-2">
                    </input>
                </div>
            <div className="flex bg-black rounded-full justify-between border-2 border-purple-300">
                <div className="flex justify-center text-xl text-purple-300 bg-purple-300 h-[3rem] w-[3rem] py-2 rounded-l-full">
                    <Image 
                        src={passImg}
                        width={30} 
                        height={30} 
                        alt="Username"
                    />
                </div>
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password" 
                    value={getPass}
                    onChange={(e) => setPass(e.target.value)}
                    className="text-xl text-purple-300 bg-black rounded-r-full w-full h-[3rem] pl-2">
                </input>
            </div>
            <div className="flex justify-center">
                <input 
                    type="submit" 
                    value="Sign Up ->"
                    onClick={() => {
                        // formData.username = getUser
                        console.log(formData)
                    }}
                    className="text-2xl text-purple-300 rounded-full border border-purple-300 p-4 mx-auto hover:scale-110 duration-100 hover:bg-purple-500/25 duration-100 hover:cursor-pointer"
                />
            </div>
        </form>
    );
}

// export default function SignUpForm() {

//     const form = useForm<z.infer<typeof userSchema>>({
//         resolver: zodResolver(userSchema),
//         defaultValues: {
//           username: '',
//           email: '',
//           password: '',
//         },
//       });

//     const onSubmit = async (values: z.infer<typeof userSchema>) => {
        
//         const response = await fetch('/api/user', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json' 
//             },
//             body: JSON.stringify({
//                 username: values.username,
//                 email: values.email,
//                 password: values.password
//             })
//         })
//         console.log(values.username);
//         console.log(values.email);
//         console.log(values.password);
//         const data = await response.json()
//     }

//         // if (response.ok) {
//         //     router.push('/dashboard')
//         // } else {
//         //     console.error('Registration failed');
//         // }

    
//     return (
//         <form onSubmit={() => form.handleSubmit(onSubmit)} className="space-y-10 w-full px-10">
//             <div className="flex bg-black rounded-full justify-between border-2 border-purple-300">
//                 <div className="flex justify-center text-xl text-purple-300 bg-purple-300 h-[3rem] w-[3rem] py-2 rounded-l-full">
//                     <Image 
//                         src={userImg}
//                         width={30} 
//                         height={30} 
//                         alt="Username"
//                     />
//                 </div>
//                 <input 
//                     type="text" 
//                     placeholder="Username" 
//                     name="username"
//                     className="text-xl text-purple-300 bg-black rounded-r-full w-full h-[3rem] pl-2">
//                 </input>
//             </div>
//                 <div className="flex bg-black rounded-full justify-between border-2 border-purple-300">
//                     <div className="flex justify-center text-xl text-purple-300 bg-purple-300 h-[3rem] w-[3rem] py-2 rounded-l-full">
//                         <Image 
//                             src={emailImg}
//                             width={30} 
//                             height={30} 
//                             alt="Username"
//                         />
//                     </div>
//                     <input 
//                         type="email"
//                         placeholder="Email" 
//                         name="email"
//                         className="text-xl text-purple-300 bg-black rounded-r-full w-full h-[3rem] pl-2">
//                     </input>
//                 </div>
//             <div className="flex bg-black rounded-full justify-between border-2 border-purple-300">
//                 <div className="flex justify-center text-xl text-purple-300 bg-purple-300 h-[3rem] w-[3rem] py-2 rounded-l-full">
//                     <Image 
//                         src={passImg}
//                         width={30} 
//                         height={30} 
//                         alt="Username"
//                     />
//                 </div>
//                 <input 
//                     type="password" 
//                     placeholder="Password"
//                     name="password" 
//                     className="text-xl text-purple-300 bg-black rounded-r-full w-full h-[3rem] pl-2">
//                 </input>
//             </div>
//             <div className="flex justify-center">
//                 <input 
//                     type="submit" 
//                     value="Sign Up ->"
//                     className="text-2xl text-purple-300 rounded-full border border-purple-300 p-4 mx-auto hover:scale-110 duration-100 hover:bg-purple-500/25 duration-100 hover:cursor-pointer"
//                 />
//             </div>
//         </form>
//     );
// }