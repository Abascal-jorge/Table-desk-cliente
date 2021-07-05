import React, { useState } from 'react';
import Navbar from "../menu/navbar";
import { AiOutlineMenu } from "react-icons/ai"; 
//import { useRouter } from "next/router";
import styled from "@emotion/styled";

const HeaderMenu = styled.header`
    background-color: #323436;
    height: 60px;
    color: white;
    .items-menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: center;
        height: 100%;
        position: relative;
    }

    .img-logo{
        z-index: 4;
    }

    .btn-menu{
        z-index: 4;
        display: none;
    }


    @media screen and (max-width: 860px){
        .btn-menu{
            display: block;
        }

        .menu-nav.active ul{
            flex-direction: column;
        }
        .menu-nav.active ul li{
            display: block;
            width: 100%;
        }

        .menu-nav.active ul li a{
            padding: 10px;
            display: block;
        }

        .menu-nav.active{
            left: 0;
        }

        .menu-nav.active .login a{
            margin-left: 0px;
        }

        .menu-nav.active .registro a{
            background-color: orange;
            width: 150px;
            margin: auto;
        }
    }
`;

const Header = () => {
    //const router = useRouter();
    const [ estilos, setEstilos ] = useState(false);

    return ( 
        <HeaderMenu>
            <div className="items-menu contenedor wrapper">
                <div className="img-logo">
                    <p>LOGO</p>
                </div>
                <Navbar estilos={estilos}/>
                <div className="btn-menu" onClick={ () => setEstilos(!estilos) }>
                    <AiOutlineMenu/>
                </div>
            </div>
        </HeaderMenu>
     );
}
 
export default Header;