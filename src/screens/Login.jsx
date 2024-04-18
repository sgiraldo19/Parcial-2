import React, { useState, useEffect, useRef } from 'react'

import '../css/estilos.css';

const Login = () => {

    const [action, setAction] = useState("Iniciar Sesión");
   
    const email = useRef();
    const password = useRef();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (authenticated) {
                // Redirigir a la página HomePage después de 3 segundos si el usuario está autenticado
                window.location.href = '/home';
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [authenticated]);

    const handleSignUp = () => {
        if (email.current.value && password.current.value) {
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            localStorage.setItem("signUp", email.current.value);
            setAuthenticated(true);
            alert("¡Cuenta creada exitosamente!");
            setAction("Iniciar Sesión")
        } else {
            alert("Por favor, complete todos los campos.");
        }
    };

    const handleSignIn = () => {
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        if (email.current.value === storedEmail && password.current.value === storedPassword) {
            setAuthenticated(true);
        } else {
            alert("Credenciales inválidas. Por favor, inténtelo de nuevo.");
        }
    };

    return (

        <div class='login-container'>

            <div class='login-form'>

                <h2>{action}</h2>

                {action === "Iniciar Sesión" ?
                    <div>

                        <form /*onSubmit={handleSubmit}*/>

                            <div class=''>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    //value={email}
                                    ref={email}
                                    //onChange={handleEmailChange}
                                    required
                                    placeholder='example@mail.com'
                                />
                            </div>

                            <div>
                                <label>Contraseña:</label>
                                <input
                                    type="password"
                                    //value={password}
                                    ref={password}
                                    //onChange={handlePasswordChange}
                                    required
                                    placeholder='*******'
                                />
                                <button type="submit" onClick={handleSignIn}>Iniciar sesión</button>
                            </div>
                            <p className={action === "Iniciar Sesión" ? 'register-link' : 'register-d'}>
                                ¿Olvidaste tu contraseña? <button>Recuperala</button>
                            </p>
                            <p className={action === "Iniciar Sesión" ? 'register-link' : 'register-d'}>
                                ¿No tienes una cuenta? <button onClick={() => { setAction("Registrate") }}>Registrate</button>
                            </p>
                        </form>

                    </div> :

                    <form /*onSubmit={handleSubmit}*/>

                        <div class=''>
                            <label>Email:</label>
                            <input
                                type="email"
                                //value={email}
                                ref={email}
                                //onChange={handleEmailChange}
                                //required
                                placeholder='example@mail.com'
                            />
                        </div>

                        <div>
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                //value={password}
                                ref={password}
                                /*onChange={handlePasswordChange}*/
                                //required
                                placeholder='*******'
                            />
                        </div>
                        <div>
                            <label>Confirma tu contraseña:</label>
                            <input
                                type="password"
                                //value={password}
                                //onChange={handlePasswordChange}
                                //required
                                placeholder='*******'
                            />
                            <button type="submit" onClick={handleSignUp}>Registrarse</button>
                        </div>
                        <p className={action === "Registrate" ? 'register-link' : 'register-d'}>
                            ¿Ya tienes una cuenta? <button onClick={() => { setAction("Inciar Sesión") }}>Inicia Sesión</button>
                        </p>
                    </form>
                }
            </div>
        </div>
    );
}

export default Login;