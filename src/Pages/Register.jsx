import React , { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// import context
import { RegisterContext } from '../Context/Register';

const Register = () => {
    // use context
    const {registerData , registerHandler} = useContext(RegisterContext);
    
    return (
        <div>
            <form className='form gap-y-4'>
                <section className='flex flex-col gap-y-2'>
                    <label htmlFor='name'>نام کاربری</label>
                    <input className='input' type="email"  value={registerData.name}
                    id='name' name='name' onChange={registerHandler}/>
                </section>
                <section className='flex flex-col gap-y-2'>
                    <label htmlFor='email'>ایمیل</label>
                    <input className='input' type="email" value={registerData.email}
                    id='email' name='email' onChange={registerHandler}/>
                </section>
                <section className='flex flex-col gap-y-2'>
                    <label htmlFor='password'>رمز عبور</label>
                    <input className='input' type="password"  value={registerData.password}
                    id='password' name='password' onChange={registerHandler}/>
                </section>
                <section className='flex flex-col gap-y-2'>
                    <label htmlFor='repeat-password'>تکرار رمز عبور</label>
                    <input className='input' type="password" value={registerData.repeatPassword}
                    id='repeat-password' name='repeatPassword' onChange={registerHandler}/>
                </section>
                <section className='flex justify-center'>
                    <button className="form-btn" type="submit">ثبت نام</button>
                </section>
                <section className='flex justify-center items-center gap-x-2'>
                    <p>قبلا ثبت نام کردید؟</p>
                    <NavLink className="text-blue-700 dark:text-blue-500" to="/login">ورود به حساب</NavLink>
                </section>
            </form>
        </div>
    );
};

export default Register;