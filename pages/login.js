import React, { useEffect } from 'react';
import axios from "axios";
import styled from "@emotion/styled";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Link  from "next/link";


const ConetenedorLogin = styled.div`
    max-width: 400px;
    background-color: white;
    margin: 20vh auto;
    padding: 40px;
    border: 2px solid white;
    -webkit-box-shadow: 5px 5px 15px 5px #eee; 
    box-shadow: 5px 5px 15px 5px #eee;

    form{
        input{
            width: 100%;
            margin: 10px 0;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 8px;
        }
        input[type="submit"]{
            background:#91D9F0;
            color: white;
        }
    }

    button{
        width: 100%;
    }

    button:first-of-type{
        margin-bottom: 10px;
    }

    .registro-social{
        text-align: center;

        .title-social{
            font-size: 18px;
            position: relative;
            color: #ddd;
            &::before{
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                width: 10%;
                height: 2px;
                background-color: #ddd;
            }
            &::after{
                content: "";
                position: absolute;
                top: 50%;
                right: 0;
                width: 10%;
                height: 2px;
                background-color: #ddd;
            }
        }

        a{
            display: block;
            border-bottom: 2px solid #eee;
            padding: 5px;
            color: #ddd;
            cursor: pointer;
        }
    }
`;


const Login = () => {

    const responseGoogle = (response) => {
        console.log(response.accessToken);
    }

    const responseFacebook = ( response ) => {
        console.log( response.accessToken );
    }

    useEffect(() => {
        const consulta = async () => {
            const url = "http://localhost:4000/usuario";

            const res = await axios(url);
            console.log(res);
        }
        consulta();
    }, [])

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
                        <Link href="/">Create account with spiceworks</Link>
                    </div>
                </div>
            </ConetenedorLogin>
        </>
    );
}
 
export default Login;