import React , { useContext } from 'react';
import { NavLink  , useNavigate} from 'react-router-dom';
import { Formik , Form } from 'formik';
import axios from 'axios';

// toastify
import { errorNotify , successNotify } from '../Helper/toastify.js';

// components
import Input from "../Formik/Input.jsx";
import SingUpButton from "../Formik/SignUpButton.jsx";
import Nav from '../Components/Nav.jsx';

// formik
import { initialValues , validationSchema } from "../Formik/FormikData.js";

// import context
import { UsersContext } from '../Context/Users.js';

const Register = () => {
    // use Context
    const {users , setLoggedIn , setUserData} = useContext(UsersContext);

    // navigate
    const navigate = useNavigate();

    // submit
    const onSubmit = (values , submitProps) => {
        const findUser = users.find(user => user.email === values.email);
        if(!findUser){
            let userData = {
                name: values.name,
                email: values.email,
                password: values.password
            }
            const sendUserData = async () => {
                await axios.post("http://localhost:3004/posts" , userData)
                .then(res => {
                    successNotify('ثبت نام با موفقیت انجام شد')
                    submitProps.setSubmitting(false);
                    submitProps.resetForm();
                    setUserData({...userData})
                    setLoggedIn(true);
                    navigate('/dashboard')
                })
                .catch(err => {
                    submitProps.setSubmitting(false);
                    errorNotify('مجددا تلاش کنید')
                })
            }
            sendUserData();
        }
        else{
            errorNotify('این ایمیل قبلا استفاده شده است');
            submitProps.setSubmitting(false);
        }
    }

    return (
        <>
            <Nav />
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
        </>
    );
};

export default Register;