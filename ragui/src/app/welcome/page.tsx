"use client";
import { useEffect, useState, useRef } from "react"

import { motion } from 'motion/react'; 

import Scramble from "../../kadirassets/TScramble";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

export default function Welcome() {
    const divRef = useRef<HTMLDivElement | null>(null)
    const signinRef = useRef<HTMLDivElement | null>(null)
    const signupRef = useRef<HTMLDivElement | null>(null)

    const [signin, setSignin] = useState<boolean>(false) 

    const switchToSignUp = () => {
        setSignin(true)
    }

    const switchToSignIn = () => {
        setSignin(false)
    }

    useEffect(() => {
        const titleScramble = new Scramble(divRef.current, "RAGDOC")
        titleScramble.run(true)

        // if(signin){
        //     Object.assign(signinRef.current!.style, {
        //         backgroundColor: "red"
        //     })
        //     Object.assign(signupRef.current!.style, {
        //         backgroundColor: 'blue'
        //     })
        // } else {
        //     Object.assign(signinRef.current!.style, {
        //         backgroundColor: "blue"
        //     })
        //     Object.assign(signupRef.current!.style, {
        //         backgroundColor: 'red'
        //     })
        // }

        if(signin && signinRef.current) {
            signinRef.current.animate(
                [
                    { opacity: 0, transform: "translateY(-20px)" }, // Start
                    { opacity: 1, transform: "translateY(0)" },     // End
                ],
                { duration: 500, easing: "ease-out" }
            )
        } else if(!signin && signupRef.current){
            signupRef.current.animate(
                [
                    { opacity: 0, transform: "translateY(-20px)" }, // Start
                    { opacity: 1, transform: "translateY(0)" },     // End
                ],
                { duration: 500, easing: "ease-out" }
            )
            
        }

    })

    return(
        <div className="
            h-screen w-[screen] bg-black
            grid grid-rows-10 grid-cols-10
            font-mono 
        ">
            <div ref={divRef} className="
                row-start-1 row-end-2 col-start-1 col-end-11 bg-gray-600
                flex place-items-center place-content-center
                text-white text-5xl
            ">RAGDOC</div>

            <div className="
                row-start-3 row-end-9 col-start-2 col-end-10
                grid grid-cols-10 grid-rows-10
            ">
                <div className="
                    row-start-1 row-end-2 col-start-1 col-end-11 bg-gray-600
                    grid grid-rows-1 grid-col-3 rounded-tl-lg rounded-tr-lg
                ">
                    <div className="col-start-1 col-end-2 flex place-content-center place-items-center" onClick={switchToSignIn}
                        ref={signinRef}
                    >sign in</div>
                    <div className="col-start-2 col-end-3 flex place-content-center place-items-center"> | </div>
                    <div className="col-start-3 col-end-4 flex place-content-center place-items-center" onClick={switchToSignUp}
                        ref={signupRef}
                    >sign up</div>
                </div>
                <div className="
                    row-start-2 row-end-11 col-start-1 col-end-11 
                    bg-gray-400 rounded-bl-lg rounded-br-lg
                ">
                    {signin ? <SignUp /> : <SignIn/>} 
                </div>
            </div>


            <div className="
                row-start-10 row-end-11 col-start-1 col-end-11
                flex place-content-center place-items-center
            ">
                <div className="
                    text-white
                ">LEGAL NOTICE</div>
                </div>
        </div>
    )
}