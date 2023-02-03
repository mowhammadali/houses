import React from 'react';
import {Field , ErrorMessage , FastField} from 'formik';

const TextArea = ({name , label}) => {
    return (
        <section className='flex flex-col gap-y-2 relative w-full'>
            <label className='select-none' htmlFor={name}>{label}</label>
            <Field as="textarea" className="text-area resize-none" id={name} name={name}/>
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

export default TextArea;