import { OBTENER_USUARIO  } from "../../types";
import axios from "axios";

export function ObtenerUsuariosAction() {
    return async (dispatch) => {
        //dispatch( obtenerUsuarios() );
        try {
            const url = "http://localhost:4000/usuario";
            const usuarios = await axios(url);
            dispatch( obtenerUsuarios( usuarios.data.usuario ) );
        } catch (error) {
            console.log(error);
            //Creamos un distpatch de error
            //dispatch( nombreFuncion() );
        }
    }
}


const obtenerUsuarios = ( usuarios ) => ({
    type: OBTENER_USUARIO,
    payload: usuarios
});