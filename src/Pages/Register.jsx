import React , { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik , Form } from 'formik';

// components
import Input from "../Formik/Input.jsx";
import SingUpButton from "../Formik/SignUpButton.jsx";

// formik
import { initialValues , onSubmit , validationSchema } from "../Formik/FormikData.js";

const Register = () => {

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnMount
        enableReinitialize
        >
            {
                formik => {
                    return(
                        <Form className='form'>
                            <Input name="name" type="text" label="نام کاربری"/>
                            <Input name="email" type="email" label="ایمیل"/>
                            <Input name="password" type="password" label="رمز عبور"/>
                            <Input name="confirmPassword" type="password" label="تکرار رمز عبور"/>
                            <SingUpButton {...formik}/>
                            <section className='flex justify-center items-center gap-x-2 text-sm'>
                                <p>قبلا ثبت نام کردید؟</p>
                                <NavLink className="text-blue-700 dark:text-blue-500" to="/login">ورود به حساب</NavLink>
                            </section>
                        </Form>
                    )
                }
            }
        </Formik>
    );
};

export default Register;