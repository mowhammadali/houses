import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form className='form'>
                <section className='flex flex-col gap-y-2'>
                    <label htmlFor='login-email'>ایمیل</label>
                    <input className='input' type="email" id='login-email'/>
                </section>
                <section className='flex flex-col gap-y-2'>
                    <label htmlFor='login-password'>رمز عبور</label>
                    <input className='input' type="password" id='login-password'/>
                </section>
                <section className='flex justify-center'>
                    <button className="form-btn" type="submit">ورود</button>
                </section>
                <section className='flex justify-center items-center gap-x-2'>
                    <p>حساب کاربری ندارید؟</p>
                    <NavLink className="text-blue-700 dark:text-blue-500" to="/register">ثبت نام</NavLink>
                </section>
            </form>
        </div>
    );
};

export default Login;