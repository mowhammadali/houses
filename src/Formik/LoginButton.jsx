import React from 'react';

const LoginButton = (props) => {
    const {isValid ,  isSubmitting} = props;
    console.log(isValid);
    console.log(isSubmitting);
    return (
        <section className='flex justify-center'>
            <button className={`form-btn ${!isValid && 'opacity-50'}`}
            type="submit" disabled={isValid}>
                {isSubmitting ? "صبور باشید ..." : "ورود"}
            </button>
        </section>
    );
};

export default LoginButton;