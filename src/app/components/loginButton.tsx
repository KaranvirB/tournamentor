// import Link from "next/link"
// import { useAppSelector, useAppDispatch } from "../hooks";
// import { isTrue, isFalse } from "../features/buttons/loginButton";

// export default async function loginButton() {

//     const isLogin = useAppSelector((state) => state.loginButton.value);
//     const dispatch = useAppDispatch();

//     return(
//         <div className="flex">
//             {isLogin === true?
//                 <Link href="/dashboard/login" replace onClick={()=> dispatch(isFalse())} className="text-2xl text-purple-300 h-full rounded-full border border-purple-300 p-4 my-auto hover:-translate-x-4 duration-100 hover:bg-purple-500/25 duration-100">
//                     Login / Sign Up{" "} 
//                     <span className="inline-block">
//                         -&gt;
//                     </span>
//                 </Link>:
//                 <Link href="/dashboard" replace onClick={()=> dispatch(isTrue())} className="text-2xl text-purple-300 h-full rounded-full border border-purple-300 p-4 my-auto hover:-translate-x-4 duration-100 hover:bg-purple-500/25 duration-100">
//                     Back to home{" "} 
//                     <span className="inline-block">
//                         -&gt;
//                     </span>
//                 </Link>
//             }
//         </div>

//     );
// }