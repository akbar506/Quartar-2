'use client'
import React, { useState } from "react";
import Login from "@/Components/Input";
import Button from "@/Components/button";
import Link from "next/link";


const LoginPage = () => {
    const [emailform, setEmailForm] = useState("");
    const [passform, setPassForm] = useState("");

    function onChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmailForm(event.target.value);
    }

    function onChangePass(event: React.ChangeEvent<HTMLInputElement>) {
        setPassForm(event.target.value);
    }
    // function onButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    //     // Implement your button click logic here (e.g., handle form submission)
    //     console.log("Button clicked!");
    //   }

    return (
        <>
            <div className="flex justify-center align-center h-lvh">
                <div className="rounded-md w-1/4 h-96 text-center justify-center mt-20 shadow-2xl">
                    <div className="font-bold mt-7 text-gray-500 text-2xl">Tailwind Login Page</div>
                    <form action="">
                        <Login value={emailform} onChange={onChangeEmail} placeholder={"Enter your Email"} name={"Search"} type={"email"} />
                        <Login value={passform} onChange={onChangePass} placeholder={"Enter your Password"} name={"Password"} type={"password"} />
                        <div className="text-right mt-7 mr-10 text-blue-700 font-semibold">
                            <Link href={"/login"}>Forget Password ?</Link>
                        </div>
                        <div>
                            <Button />
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}

export default LoginPage;