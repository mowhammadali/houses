import React from 'react';
import {Field , ErrorMessage } from 'formik';

const Input = ({name , label , type}) => {
    return (
        <section className='flex flex-col gap-y-2 relative'>
            <label className='select-none' htmlFor={name}>{label}</label>
            <Field className="input" type={type} id={name} name={name} />
            <ErrorMessage name={name}>
                {error => <span className='text-xs 
                text-red-600 absolute bottom-[-20px] right-0'>
                    {error}
                </span>
                }
            </ErrorMessage>
        </section>
    );
};

export default Input;