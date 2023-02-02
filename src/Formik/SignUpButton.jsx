import React from 'react';

const SignButton = (props) => {
    const {isValid ,  isSubmitting} = props;
    console.log(isValid);
    console.log(isSubmitting);
    return (
        <section className='flex justify-center'>
            <button className={`form-btn ${!isValid && 'opacity-50'}`}
            type="submit" disabled={isValid}>
                {isSubmitting ? "صبور باشید ..." : "ثبت نام"}
            </button>
        </section>
    );
};

export default SignButton;