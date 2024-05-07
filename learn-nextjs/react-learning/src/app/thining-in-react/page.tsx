'use client';
import React, { use } from "react";
import { useState } from "react";
import InputForm from "@/components/InputForm";


const data = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const ThinkingInReact = () => {
    const [search, setSearch] = useState("");

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        console.log(event)

    }
    return (
        <>
            <InputForm value={search} onChange={onSearch} placeholder={"Search..."} name={"Search"} type={"text"} />

            <div className="m-6 text-center rounded-md">
                <div className="flex justify-center text-center">
                    <div className="border-cyan-500 border-2 bg-cyan-400 rounded-tl-lg p-3 w-40 font-bold">Name</div>
                    <div className="border-cyan-500 border-2 bg-cyan-400 p-3 w-40 font-bold">Category</div>
                    <div className="border-cyan-500 border-2 bg-cyan-400 p-3 w-40 font-bold">Stock</div>
                    <div className="border-cyan-500 border-2 bg-cyan-400 rounded-tr-lg p-3 w-40 font-bold">Price</div>
                </div>
                <div className="flex justify-center text-center">
                    <div>
                        {data.map((item)=>(<div className="border-cyan-500 border-2 bg-cyan-200 p-3 w-40">{item.name}</div>))}
                    </div>
                    <div>
                        {data.map((item)=>(<div className="border-cyan-500 border-2 bg-cyan-200 p-3 w-40">{item.category}</div>))}
                    </div>
                    <div>
                        {data.map((item)=>(<div className="border-cyan-500 border-2 bg-cyan-200 p-3 w-40">{item.stocked == true ? ( <>Yes</> ): ( <>No</> )}</div>))}
                    </div>
                    <div>
                        {data.map((item)=>(<div className="border-cyan-500 border-2 bg-cyan-200 p-3 w-40">{item.price}</div>))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThinkingInReact;