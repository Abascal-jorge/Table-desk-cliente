import { OBTENER_USUARIO  } from "../../types";
import axios from "axios";

export function AuthenticationAction() {
    return async (dispatch) => {
        //dispatch( obtenerUsuarios() );
        try {
            const url = "http://localhost:4000/usuario";
            const auth = await axios(url);
            dispatch( obtenerAuthentication( auth.data.usuario ) );
        } catch (error) {
            console.log(error);
            //Creamos un distpatch de error
            //dispatch( nombreFuncion() );
        }
    }
}


const obtenerAuthentication = ( auth ) => ({
    type: OBTENER_USUARIO,
    payload: auth
});
