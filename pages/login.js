import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Link  from "next/link";
import ConetenedorLogin from "../components/login/loginStyle";
/*Redux */
import { connect } from "react-redux";
import { ObtenerUsuariosAction  } from "../redux/actions/usuarioAction";

const Login = (props) => {


    const responseGoogle = (response) => {
        console.log(response.accessToken);
    }

    const responseFacebook = ( response ) => {
        console.log( response.accessToken );
    }

    useEffect(async() => {
        props.ObtenerUsuariosAction();
        console.log(props.userInfo);
    }, []);

    return ( 
        <>

            <ConetenedorLogin>
                <div className="contenedor-login">
                    <h2>Log in to table helk</h2>
                    <form>
                        <input placeholder="Email Address" required type="email"></input>
                        <input placeholder="Password" required type="password"></input>
                        <label>Forgot your password?</label>
                        <input type="submit" value="Log in"></input>
                    </form>
                    <div className="registro-social">
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
                    </div>
                </div>
            </ConetenedorLogin>
        </>
    );
}

//esta funcion ayuda a traer el state del reducer specificado
const mapStateToProps = state => ({
    userInfo: state.usuario
})
  
//Esta funcion ayuda a traer la funcion del action a este page
const mapDispatchToProps = {
    ObtenerUsuariosAction
}


 
export default connect(mapStateToProps, mapDispatchToProps)(Login);