import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const Login = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    const responseFacebook = ( response ) => {
        console.log( response );
    }

    return ( 
        <>
             <GoogleLogin
                clientId="102173154229-ngr547l49iedr4fsikjcejjbneuk9a1j.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            <FacebookLogin
                appId="330725135305902"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook} 
            />
        </>
    );
}
 
export default Login;