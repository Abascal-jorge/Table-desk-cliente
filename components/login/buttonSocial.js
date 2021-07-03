import React from 'react';
import Link from "next/link";
import { RegistroSocial } from "./loginStyle";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const ButtonSocial = (props) => {

    const { enlace } = props;
    const responseGoogle = (response) => {
        console.log(response.accessToken);
    }

    const responseFacebook = ( response ) => {
        console.log( response.accessToken );
    }


    return ( 
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
            { enlace &&
                <Link href="/crearCuenta">{enlace}</Link>
            }
        </RegistroSocial>
    );
}
 
export default ButtonSocial;