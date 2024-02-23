import React, {useState} from 'react';
import Button from './Button';
import axios from 'axios';
import { } from "react-router-dom";

function Register() {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/auth/signup',{
                username,
                email,
                password
            })
        } catch (error) {
            console.error('Registration failed:', error.response.data.message);
        }
    }
    // <Redirect/>

    return (
        
        <div className='bg-white px-10 py-7 rounded-3xl border-2 border-gray-200'>

            <h1 className='text-5xl font-semibold text-center'>Registro</h1>
            <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Bienvenido! Registrate ahora</p>

            <form onSubmit={handleSubmit}>
                <div className='mt-8'>
                    <label className='text-lg font-medium'>Username</label>
                    <input value={username} onChange={(event) => setUsername(event.target.value)} className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Username'>
                    </input>
                </div>

                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Email'>

                    </input>
                </div>
                
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <input value={password} onChange={(event) => setPassword(event.target.value)} className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Password' type='password'></input>
                </div>

                <div className='mt-8 flex flex-col'>
                    <Button success rounded marginbtm>Crear cuenta</Button>
                    <Button rounded outline>Sign in with google</Button>
                </div>

            </form>
    

        </div>
    )
}

export default Register;