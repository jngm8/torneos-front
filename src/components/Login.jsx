import React, { useContext, useRef, useState, useEffect } from 'react';
import Button from './Button';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import Google from '../img/google.jpg';
import { AuthContext } from '../context/AuthProvider';
import { FormattedMessage, useIntl  } from 'react-intl';

function Login() {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef(null);
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        // Ensure userRef.current is not null before calling focus
        if (userRef.current !== null) {
            userRef.current.focus();
        }
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/auth/signin',
                {
                    username,
                    password
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(response);
            

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.role;
            
            setAuth({username,password,accessToken,roles});
            setUsername('');
            setPassword('');
            navigate("/");

        } catch (error) {
            if (!error.response) {
                setErrMsg(intl.formatMessage({ id: 'ErrorIS1' }));
            } else if (error.response.status === 400) {
                setErrMsg(intl.formatMessage({ id: 'ErrorIS2' }));
            } else if (error.response.status === 401) {
                setErrMsg(intl.formatMessage({ id: 'ErrorIS3' }));
            } else {
                setErrMsg(intl.formatMessage({ id: 'ErrorIS4' }));
            }

            errRef.current.focus();
        }

    }

    const intl = useIntl()

    return (

        <div className='bg-white px-10 py-7 rounded-3xl border-2 font-squada-one'>

            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 className='text-5xl font-semibold text-center'><FormattedMessage id="TituloIS"/></h1>
            <p className='font-medium text-lg text-gray-500 mt-4 text-center'><FormattedMessage id="BienvenidaIS"/></p>

            <form onSubmit={handleSubmit}>

                <div className='mt-8'>
                    <label className='text-lg font-medium'><FormattedMessage id="UsuarioIS"/></label>
                    <input
                        type='text'
                        id='username'
                        ref={userRef}
                        autoComplete='on'
                        placeholder={intl.formatMessage({ id: 'UsuarioIS' })}
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        required
                    />
                </div>

                <div>
                    <label className='text-lg font-medium'><FormattedMessage id="ContraseñaIS"/></label>
                    <input
                        id='password'
                        value={password}
                        placeholder={intl.formatMessage({ id: 'ContraseñaIS' })}
                        onChange={(event) => setPassword(event.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        type='password'
                    />
                </div>

                <div className='mt-8 flex flex-col'>
                    <Button primary rounded marginbtm><FormattedMessage id="UnirmeIS"/></Button>
                </div>
            </form>

            <Button secondary rounded outline>
                <img src={Google} alt="Google Logo" className="w-4 h-4 rounded-full" />
                <span><FormattedMessage id="GoogleIS"/></span>
            </Button>
            <p className='flex justify-center  items-center mt-2'>
                <div className='font-italic'><FormattedMessage id="PreguntaRegistroIS"/></div>
                <span className="ml-2 line">
                    <Link to={"/register"}>
                        <Button nocustom><FormattedMessage id="RegistrarmeIS"/></Button>
                    </Link>
                </span>
            </p>
        </div>
    )
}

export default Login;