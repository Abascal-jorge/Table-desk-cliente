import React, { useState } from 'react';
import { FormRegistro } from "./loginStyle";
import { connect } from "react-redux";
import { newUsuarioAction, quitarMensaje } from "../../redux/actions/authAction";
import { useRouter } from 'next/router';

const Registro = (props) => {
    const router = useRouter();
    const [ datos, setDatos ] = useState({
        nombre: "",
        password: "",
        correo: "",
        rol: "USER_ROLE"
    });
    const [error, setError] = useState(false);

    //Funcion submit
    const onSubmitDatos = async e => {
        e.preventDefault();

        //Verifica que todos los elementos del objeto no esten vacios si estan vacios termina la ejecucion
        if( !Object.values(datos).every( items => items !== "") ){
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }
        setError(false);
        await props.newUsuarioAction(datos);

        props.quitarMensaje();

        router.push("/");
    }

    // Llenar datos input 
    const llenarDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        });
    }

    return ( 
        <FormRegistro onSubmit={onSubmitDatos}>
            { error && <p>Todos los campos son obligatorios</p>}
            <div className="campos-items">
                <label>Nombre</label>
                <input type="text" name="nombre" value={datos.nombre} onChange={llenarDatos} placeholder="Ingresa tu nombre"></input>
            </div>
            <div className="campos-items">
                <label>Correo</label>
                <input type="email" name="correo" value={datos.correo} onChange={llenarDatos} placeholder="Ingresa tu correo"></input>
            </div>
            <div className="campos-items">
                <label>Password</label>
                <input type="password" name="password" value={datos.password} onChange={llenarDatos} placeholder="Contraseña"></input>
            </div>
            <input type="submit" value="Crear cuenta"/>
        </FormRegistro>
     );
}

//esta funcion ayuda a traer el state del reducer specificado
const mapStateToProps = state => ({
    userInfo: state.newUsuario
})
  
//Esta funcion ayuda a traer la funcion del action a este page
const mapDispatchToProps = {
    newUsuarioAction,
    quitarMensaje
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Registro);
