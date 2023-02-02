import React from 'react';

const Login = () => {
    return (
        <div>
            <form className='flex flex-col gap-y-10 w-[350px] 
            shadow-lg mx-auto my-20 p-6'>
                <section className='flex flex-col gap-y-2'>
                    <label htmlFor='email'>ایمیل</label>
                    <input type="email" id='email'/>
                </section>
                <section className='flex flex-col gap-y-2'>
                    <label htmlFor='password'>رمز عبور</label>
                    <input type="password" id='password'/>
                </section>
            </form>
        </div>
    );
};

export default Login;