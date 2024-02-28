import React, {useState,useRef,useEffect} from 'react';
import Button from './Button';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Register() {

    

    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const userRef = useRef();
    const errRef = useRef();


    const [username,setUsername] = useState('');
    const [validName,setValidName] = useState(false);
    const [userFocus,setUserFocus] = useState(false);

    const [password,setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    useEffect(() => {
            userRef.current.focus();
    }, [])

    // Validate username with the regex
    useEffect(() => {
        setValidName(USER_REGEX.test(username));
    }, [username])

    // Validate password with the regex
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    // If one of the field are changed, take out the err message until it passes the regex
    useEffect(() => {
        setErrMsg('');
    }, [username, password, matchPwd])

    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/auth/signup', {
                username,
                password,
            },
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
            );

            console.log(response);
            
            navigate('/login');
        } catch (error) {
            if (!error?.response){
                setErrMsg("El servidor no responde")
            } else if (error.response?.status === 409){
                setErrMsg("¡Usuario ya existe!")
            } else {
                setErrMsg("Registro fallido")
            }

            errRef.current.focus();
        }
    }

    return (
        
        <div className='bg-white px-10 py-7 rounded-3xl border-2  font-squada-one'>
            
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 className='text-5xl font-semibold text-center '>Registro</h1>
            {/* <p className='font-medium text-lg text-gray-500 mt-4 text-center'>Bienvenido! Registrate ahora</p> */}

            <form onSubmit={handleSubmit}>
                <div className='mt-2'>
                    <label className='text-lg font-medium'>
                        Usuario
                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validName || !username ? "hide" : "invalid"} />
                    </label>
                    <input
                        type='text'
                        id='username'
                        ref={userRef}
                        autoComplete='off'
                        value={username} 
                        onChange={(event) => setUsername(event.target.value)} 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        placeholder='Usuario'
                    />

                    <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                           4 a 24 caracteres. Debe iniciar con una letra.
                           Letras,<br/> numeros, guiones permitidos.
                    </p>
  
                </div>
                
                <div>
                    <label className='text-lg font-medium'>
                        Contraseña
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />
                    </label>
                    <input
                    id='password'
                    required
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)} 
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Contraseña' 
                    type='password'
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    />
                </div>
                <p id="password" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    De 8 a 24 caracteres. Debe incluir letras mayúsculas y minúsculas <br />
                    así como un número y un carácter especial. Se permiten los siguientes <br />
                    caracteres especiales: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>


                <div>
                    <label className='text-lg font-medium'>
                        Confirmar contraseña
                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                    </label>

                    <input
                        type='password'                             // Specifies the input type as password
                        id='confirm_pwd'                            // Specifies the id attribute of the input element
                        required                                    // Specifies that the input field must be filled out
                        value={matchPwd}                            // Binds the value of the input field to the state variable matchPwd
                        onChange={(event) => setMatchPwd(event.target.value)} // Updates the matchPwd state variable when the input value changes
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' // Applies Tailwind CSS classes for styling
                        placeholder='Confirmar contraseña'          // Specifies a placeholder text for the input field
                        aria-invalid={validMatch ? "false" : "true"} // Specifies if the input is invalid for accessibility purposes
                        aria-describedby="confirmnote"              // Associates the input with an element that provides instructions or feedback
                        onFocus={() => setMatchFocus(true)}         // Event handler triggered when the input field gains focus
                        onBlur={() => setMatchFocus(false)}         // Event handler triggered when the input field loses focus
                    />

                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Debe ser la misma contraseña del paso anterior
                    </p>
                </div>

                <div className='mt-4 flex flex-col '>
                    <Button disabled={!validName || !validPwd || !validMatch ? true : false} success rounded marginbtm>Crear cuenta</Button>
                    <Button primary rounded outline>Registrate con google</Button>
                </div>


            </form>
            <p className='flex justify-center  items-center mt-2'>
                    <div className='font-italic'>¿Ya estás registrado?</div>
                    <span className="ml-2 line">
                        <Link to={"/login"}>
                            <Button nocustom>Unete</Button>
                        </Link>                      
                    </span>
            </p>

        </div>
    )
}

export default Register;