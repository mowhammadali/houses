import React , { useContext, useEffect } from 'react';

// import context
import { UsersContext } from '../Context/Users';

const SignButton = (props) => {
    // props
    const {isValid ,  isSubmitting} = props;

    // use Context
    const {validate , setValidate} = useContext(UsersContext);

    // useEffect
    useEffect(() => {
        setValidate(!validate);
    } , [isValid])

    return (
        <section className='flex justify-center'>
            <button className={`form-btn ${!isValid && 'opacity-40'}`}
            type="submit" disabled={!isValid}>
                {isSubmitting ? "درحال ارسال..." : "ثبت نام"}
            </button>
        </section>
    );
};

export default SignButton;