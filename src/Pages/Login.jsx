import React , { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik , Form } from 'formik';

// toastify
import { errorNotify , successNotify } from '../Helper/toastify.js';

// components
import Input from "../Formik/Input.jsx";
import LoginButton from '../Formik/LoginButton.jsx';

// formik
import { initialValues2 , validationSchema2 } from "../Formik/FormikData.js";

// import context
import { UsersContext } from '../Context/Users.js';

const Login = () => {
    // use context
    const {users} = useContext(UsersContext);
    console.log(users);

    const onSubmit = (values , submitProps) => {
        console.log(values);
        const findEmail = users.find(user => user.email === values.loginEmail);
        const findPassword = users.find(user => user.password === values.loginPassword);
        if(findEmail && findPassword){
            successNotify('ورود به حساب');
            submitProps.setSubmitting(false);
            submitProps.resetForm();
        }
        else{
            errorNotify('ایمیل یا رمز عبور اشتباه است');
            submitProps.setSubmitting(false);
        }
    }

    return (
        <Formik
        initialValues={initialValues2}
        onSubmit={onSubmit}
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
                            <section className='flex justify-center items-center gap-x-2 text-sm'>
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