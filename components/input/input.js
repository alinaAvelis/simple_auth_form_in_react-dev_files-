import React from 'react';
import './input.scss';

export const Input = ({type, placeholder, name, onChangeHandler}) => {
    
    return (
        <>
            <input className="input" type={type} name={name}  placeholder={placeholder} onChange={onChangeHandler}/>
        </>
    )
}