import React from "react";

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

function RenderingList() {
    return (
        <div>
            <p className="font-bold m-5">Rendering List</p>
            <div>
                {products.map((item) => {
                    return (
                        <div key={item.id} className="bg-green-400 mx-2 p-2">
                            <div className="bg-green-300">{item.title}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RenderingList;