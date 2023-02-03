import React , { useContext , useEffect } from 'react';

// import context
import { UsersContext } from '../Context/Users';

const LoginButton = (props) => {
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
                {isSubmitting ? "درحال ورود به حساب..." : "ورود"}
            </button>
        </section>
    );
};

export default LoginButton;