import { OBTENER_USUARIO, NEW_USUARIO, QUITAR_MENSAJE  } from "../../types";
import clienteAxios from "../../config/axios";
import Swal from 'sweetalert2';
//import 'sweetalert2/src/sweetalert2.scss';


/*Creando usuario conb correo y contrasela*/
export function newUsuarioAction( datos ) {
    return async (dispatch) => {
        //dispatch( obtenerUsuarios() );
        try {
            
            const auth = await clienteAxios.post("/usuario", datos);
            console.log(auth);
            dispatch( crearUsuario( true ) );
        } catch (error) {
            console.log(error);
            //Creamos un distpatch de error
            //dispatch( nombreFuncion() );
        }
    }
}


const crearUsuario = ( user ) => ({
    type: NEW_USUARIO,
    payload: user
});


export function quitarMensaje(){
    return (distpach) => {
        Swal.fire({
            title: 'Usuario creado',
            text: 'Usuario creado con existo!!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        distpach({
            type: QUITAR_MENSAJE,
            payload: false
        })
    }
}


/* Authentificacion de usuarios */
