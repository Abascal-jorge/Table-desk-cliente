import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Link  from "next/link";
import { ContenedorFormulario, FormLogin, RegistroSocial } from "../components/login/loginStyle";
/*Redux */
import { connect } from "react-redux";
import { AuthenticationAction } from "../redux/actions/authAction";

const Login = (props) => {

    const { auth } = props.userInfo;
    const responseGoogle = (response) => {
        console.log(response.accessToken);
    }

    const responseFacebook = ( response ) => {
        console.log( response.accessToken );
    }

    useEffect(async() => {
        props.AuthenticationAction();
         
        console.log( props.userInfo );
    }, []);

    return ( 
        <>

            <ContenedorFormulario>
                <div className="contenedor-login">
                    { auth.length > 0 &&
                        <p>{auth[0].nombre}</p>
                    }
                    <h2>Log in to table helk</h2>
                    <FormLogin>
                        <input placeholder="Email Address" required type="email"></input>
                        <input placeholder="Password" required type="password"></input>
                        <label>Forgot your password?</label>
                        <input type="submit" value="Log in"></input>
                    </FormLogin>
                    <RegistroSocial>
                        <h3 className="title-social">Or Connect with  <FaFacebookF/>  <FcGoogle/></h3>
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
                        <Link href="/crearCuenta">Create account with spiceworks</Link>
                    </RegistroSocial>
                </div>
            </ContenedorFormulario>
        </>
    );
}

//esta funcion ayuda a traer el state del reducer specificado
const mapStateToProps = state => ({
    userInfo: state.auth
})
  
//Esta funcion ayuda a traer la funcion del action a este page
const mapDispatchToProps = {
    AuthenticationAction
}


 
export default connect(mapStateToProps, mapDispatchToProps)(Login);