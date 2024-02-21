import React from 'react';
import Button from './Button';

function Register() {

    return (
        
        <div className='bg-white px-10 py-7 rounded-3xl border-2 border-gray-200'>

            <h1 className='text-5xl font-semibold text-center'>Registro</h1>
            <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Bienvenido! Registrate ahora</p>

            <div className='mt-8'>
                <label className='text-lg font-medium'>Email</label>
                <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                 placeholder='Email'>

                 </input>
            </div>
            
            <div>
                <label className='text-lg font-medium'>Password</label>
                <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                 placeholder='Password' type='password'></input>
            </div>

            <div className='mt-8 flex flex-col'>
                <Button secondary rounded>Crear cuenta</Button>
                <Button primary rounded outline>Sign in with google</Button>
            </div>

        </div>
    )
}

export default Register;