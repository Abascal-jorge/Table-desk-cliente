import React from 'react';
import Link from "next/link";
import styled from "@emotion/styled";

const Navmenu = styled.nav`

    ul{
        list-style: none;
        display: flex;
    }

    li a{
        padding: 10px;
    }

    .login a{
        border-left: 1px solid white;
        margin-left: 10px;
    }

    .registro a{
        background-color: orange;
    }

    @media(max-width: 860px){
        position: absolute;
        left: -500%;
        top: 0;
        background-color: black;
        width: 100%;
        height: 100vh;
        text-align: center;
        padding-top: 100px;
        transition: .2s ease-in-out;
    }
`;


const Navbar = (props) => {

    return ( 
        <Navmenu className={ props.estilos ? "menu-nav active" : "menu-nav"}>
            <ul>
                <li><Link href="/">Comunidad</Link></li>
                <li><Link href="/">Herramientas</Link></li>
                <li><Link href="/">Aprender</Link></li>
                <li><Link href="/">Reseñas de productos</Link></li>
                <li className="login"><Link href="/login">Iniciar Sesión</Link></li>
                <li className="registro"><Link href="/crearCuenta">Crear Cuenta</Link></li>
            </ul>
        </Navmenu>
     );
}
 
export default Navbar;