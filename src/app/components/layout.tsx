'use client'
import { ReactNode } from "react";
import Link from "next/link";
import LoginPageButton from "./loginPageButton";
import { useAppSelector, useAppDispatch } from "../hooks";
import { goLogin } from "../features/buttons/loginPageSlice";

/* 
*  This is the layout of most pages on the site 
*  It contains components of the site which are consistent with multiple pages 
*  This allows for less repetition of code across the project
*/

// interface State {
//     isLogin: boolean,
//     text: string, 
//     link: string
// };

// type Action = 
//       {type: "login"}
//     | {type: "return"}

// const initialState: State = {isLogin: false, text: "Login/Sign up", link: "/dashboard/login"};
// const loginState: State = {isLogin: true, text: "Return to Homepage", link: "/dashboard"};

// function stateReducer(state: State, action: Action): State {
//     switch (action.type) {
//         case "login": 
//             return loginState;
//         case "return":
//             return initialState;
//         default:
//             throw new Error("Unknown action");
//     }
// }

export default function Layout({children,}: Readonly<{children:ReactNode;}>) {

    // const [state, dispatch] = useReducer(stateReducer, initialState);

    // const goLogin = () => dispatch({ type: "login"});
    // const goBack = () => dispatch({ type: "return"});

    const loginPage = useAppSelector((state) => state.loginPageButton.value)
    const dispatch = useAppDispatch();

    return (
        <main className="flex flex-col h-screen p-10 space-y-10 justify-between bg-gradient-to-b from-black via-purple-950/40 via-40% to-black to-90%">

            {/* HEADER */}
            
            <div className="flex flex-row bg-gradient-to-l from-blue-950/75 to-black to-80% border-l-4 border-purple-400 p-6 rounded-r-full justify-between">
                <Link href="/dashboard" className="text-5xl tracking-widest bg-gradient-to-r from-blue-800 to-purple-500 text-transparent bg-clip-text my-auto animate-in fade-in hover:animate-pulse animate-infinite">TournaMentor</Link>
                
                {loginPage === false?
                    <LoginPageButton text="Login/Sign up" onClick={() => dispatch(goLogin())} href="/dashboard/login" />:
                    <LoginPageButton text="Back to Home" onClick={() => dispatch(goLogin())} href="/dashboard" />
                }
                
                
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