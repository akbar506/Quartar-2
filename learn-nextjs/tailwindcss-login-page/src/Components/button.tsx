import React from "react";

type InputDataType = {
    onClick: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLElement, any>) => void;
}

const Button = () => {
    return (
        <button className="p-3 bg-blue-700 text-white w-96 mt-7">Login to your account</button>
    );
}

export default Button;