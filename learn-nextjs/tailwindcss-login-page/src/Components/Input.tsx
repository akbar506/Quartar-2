import React from "react";

type InputDataType = {
    value: string;
    placeholder: string;
    name: string;
    type: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Login = ({ value, placeholder, name, type, onChange }: InputDataType) => {
    return (
         <input type={type} placeholder={placeholder} name={name} onChange={onChange} value={value} className="border-gray-500 border-2 p-2 w-96 rounded-md mt-9 focus:border-blue-700 focus:border-2"/>
    );
}

export default Login;