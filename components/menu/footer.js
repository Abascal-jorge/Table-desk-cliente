import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai"
import styled from "@emotion/styled";


const FooterPage = styled.footer`
    background: black;
    color: blue;
    font-size: 24px;
    height: 50px;
    
    .footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

`

const Footer = () => {
    return ( 
        <FooterPage>
            <div className="footer contenedor wrapper">
                <div className="img-logo">
                    <p>LOGO</p>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com" target="_blank"><FaFacebookF/></a>
                    <a href="https://www.facebook.com" target="_blank"><AiFillTwitterSquare/></a>
                    <a href="https://www.facebook.com" target="_blank"><AiFillInstagram/></a>
                </div>
            </div>
        </FooterPage>
     );
}
 
export default Footer;