import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik , Form } from 'formik';

// components
import Input from "../Formik/Input.jsx";
import LoginButton from '../Formik/LoginButton.jsx';

// formik
import { initialValues2 , onSubmit2 , validationSchema2 } from "../Formik/FormikData.js";

const Login = () => {
    return (
        <Formik
        initialValues={initialValues2}
        onSubmit={onSubmit2}
        validationSchema={validationSchema2}
        validateOnChange={true}
        validateOnMount
        enableReinitialize
        >
            {
                formik => {
                    return(
                        <Form className='form'>
                            <Input name="loginEmail" type="email" label="ایمیل"/>
                            <Input name="loginPassword" type="password" label="رمز عبور"/>
                            <LoginButton {...formik}/>
                            <section className='flex justify-center items-center gap-x-2'>
                                <p>حساب کاربری ندارید؟</p>
                                <NavLink className="text-blue-700 dark:text-blue-500" to="/register">ثبت نام</NavLink>
                            </section>
                        </Form>
                    )
                }
            }
        </Formik>
    );
};

export default Login;