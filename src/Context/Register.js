import React, { useEffect, useState } from 'react';

export const RegisterContext = React.createContext();

const Register = ({children}) => {
    // form value
    const [registerData , setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    // error messages
    const [errorMessage , setErrorMessage] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
        repeatPasswordError: ''
    });

    // form onChange
    const registerHandler = (e) => {
        setRegisterData({...registerData , [e.target.name]: e.target.value})
    }
    console.log(errorMessage);

    useEffect(() => {
        if(!errorMessage.nameError){
            setErrorMessage({
                ...errorMessage, 
                nameError: 'لطفا فیلد را پر کنید'
            })
        }
    } , [registerData])

    return (
        <RegisterContext.Provider value={{registerData , registerHandler}}>
            {children}
        </RegisterContext.Provider>
    );
};

export default Register;