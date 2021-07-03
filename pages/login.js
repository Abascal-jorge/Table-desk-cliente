import React, { useEffect } from 'react';
import ButtonSocial from "../components/login/buttonSocial";
import { ContenedorFormulario, FormLogin } from "../components/login/loginStyle";

const Login = (props) => {

    useEffect(async() => {
        //props.AuthenticationAction();
    }, []);

    return ( 
        <>
            <ContenedorFormulario>
                <div className="contenedor-login">
                    <h2>Log in to table helk</h2>
                    <FormLogin>
                        <input placeholder="Email Address" required type="email"></input>
                        <input placeholder="Password" required type="password"></input>
                        <label>Forgot your password?</label>
                        <input type="submit" value="Log in"></input>
                    </FormLogin>
                    <ButtonSocial 
                        enlace= "Create account with spiceworks"
                    />
                </div>
            </ContenedorFormulario>
        </>
    );
}

 
export default Login;