"use client"
import React from "react";
import { useState } from "react";

export function UpdatingScreen(){
   const [count, setCount] =  useState<number>(0)
    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }

    function reset(){
        setCount(0)
    }

    return(
        <div className="flex mt-5 justify-center flex-col gap-5 items-center">
      <p className="font-bold">Counter App</p>
      <div className="flex  gap-5 justify-center items-center">
        <button
          className="bg-blue-500 rounded-sm py-2 px-5"
          onClick={increment}
        >
          +
        </button>
        {count}
        <button className="bg-red-500 rounded-sm py-2 px-5" onClick={decrement}>
          -
        </button>
      </div>
      <div className="flex  gap-5 justify-center items-center">
        <button className="bg-green-500 rounded-sm py-2 px-5" onClick={reset}>Reset</button>
      </div>
    </div>
    );
}