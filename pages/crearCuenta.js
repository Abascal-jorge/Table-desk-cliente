import React from 'react';
import Link from "next/link";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const CrearCuenta = () => {

    const responseGoogle = (response) => {
        console.log(response.accessToken);
    }

    const responseFacebook = ( response ) => {
        console.log( response.accessToken );
    }

    
    return ( 
        <>
            <div>
                <Link href="/">Regresar Inicio</Link>
                <h2>Registrate</h2>
                <form>
                    <div>
                        <label>Nombre</label>
                        <input type="text" placeholder="Ingresa tu nombre"></input>
                    </div>
                    <div>
                        <label>Correo</label>
                        <input type="email" placeholder="Ingresa tu correo"></input>
                    </div>
                    <div>
                        <label>Correo</label>
                        <input type="email" placeholder="Confirma tu correo"></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Ingresa tu nombre"></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Confirma tu contraseña"></input>
                    </div>
                    <input type="submit" value="Crear cuenta"/>

                    <GoogleLogin
                            clientId="102173154229-ngr547l49iedr4fsikjcejjbneuk9a1j.apps.googleusercontent.com"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                    >Connect with Google</GoogleLogin>

                    <FacebookLogin
                            appId="330725135305902"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook} 
                    />
                </form>
            </div>
        </>
     );
}
 
export default CrearCuenta;