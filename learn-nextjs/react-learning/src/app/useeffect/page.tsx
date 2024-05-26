'use client'
import React, { useState, useEffect } from "react";


const useEffectfunc = () => {
    const [age, setAge] = useState<number>(0);
    const [amiright, setAmIRight] = useState<string>("");
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setAge(18);
            setAmIRight(', Am I Right?')
        }, 5000);
    }, []);

    useEffect(() => {
        document.title = `You clicked ${count} times!`;
        console.log(`You clicked ${count} times!`);
    }, [count])

    return (
        <>
            <h1 className="font-bold text-center text-3xl my-5">useEffect</h1>
            <h1 className="font-bold text-center text-2xl">Your age is {age} {amiright}</h1>
            <h1 className="text-center">Please Wait for 5 second</h1>
            <p className="text-center">{count}</p>
            <div className="flex justify-center">
                <button onClick={() => setCount(count + 1)} className="my-5 rounded-md bg-zinc-950 p-3 text-white mx-3">
                    Increment
                </button>
                <button onClick={() => setCount(count)} className="my-5 rounded-md bg-zinc-950 p-3 text-white mx-3">
                    Same
                </button>
                <button onClick={() => setCount(count - 1)} className="my-5 rounded-md bg-zinc-950 p-3 text-white mx-3">
                    Decrement
                </button>

            </div>
        </>
    );
}

export default useEffectfunc;