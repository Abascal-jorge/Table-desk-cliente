import React from 'react';
import Link from "next/link";
import Registro from "../components/login/registro";
import ButtonSocial from '../components/login/buttonSocial';
import { ContenedorFormulario } from "../components/login/loginStyle";
import { connect } from "react-redux";
import { newUsuarioAction } from "../redux/actions/authAction";

const CrearCuenta = () => {

    return ( 
        <>
            <div className="wrapper">
                <ContenedorFormulario>
                    <Link href="/">Regresar Inicio</Link>
                    <h2>Registrate</h2>
                    <Registro/>
                    <ButtonSocial/>
                </ContenedorFormulario>
            </div>
        </>
     );
}
 
//esta funcion ayuda a traer el state del reducer specificado
const mapStateToProps = state => ({
    userInfo: state.newUsuario
})
  
//Esta funcion ayuda a traer la funcion del action a este page
const mapDispatchToProps = {
    
}


 
export default connect(mapStateToProps, mapDispatchToProps)(CrearCuenta);