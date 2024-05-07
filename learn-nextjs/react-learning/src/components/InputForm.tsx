import React from "react";


type InputDataType = {
    value: string;
    placeholder: string;
    name: string;
    type: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 

const InputForm = ({value, onChange, placeholder, name, type}: InputDataType) => {

    return(
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className="border-black border-2 m-6 px-3 py-2"/>
    );
}

export default InputForm;