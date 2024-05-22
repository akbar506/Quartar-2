import React from "react";

type InputTypes = {
    name: string,
    type: string,
    placeholder: string,
    value: string,
    className:string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = ({name, type, placeholder, value, onChange, className}: InputTypes) =>{
    return(
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className={className}/>
    );
}

export default Input;