import React , { useContext } from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
import { Formik , Form } from 'formik';

// toastify
import { errorNotify , successNotify } from '../Helper/toastify.js';

// components
import Input from "../Formik/Input.jsx";
import LoginButton from '../Formik/LoginButton.jsx';
import Nav from '../Components/Nav.jsx';

// formik
import { initialValues2 , validationSchema2 } from "../Formik/FormikData.js";

// import context
import { UsersContext } from '../Context/Users.js';

const Login = () => {
    // use context
    const {users , setLoggedIn , setUserData} = useContext(UsersContext);

    // navigate
    const navigate = useNavigate();

    const onSubmit = (values , submitProps) => {
        const findUser = users.find(user => ((user.email === values.loginEmail) && (user.password === values.loginPassword)) );
        if(findUser){
            successNotify('ورود به حساب');
            submitProps.setSubmitting(false);
            submitProps.resetForm();
            setUserData({...findUser})
            setLoggedIn(true);
            navigate('/dashboard');
        }
        else{
            errorNotify('ایمیل یا رمز عبور اشتباه است');
            submitProps.setSubmitting(false);
        }
    }

    return (
        <>
            <Nav />
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
        </>
    );
};

export default Login;