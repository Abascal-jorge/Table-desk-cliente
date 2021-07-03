import { OBTENER_USUARIO, NEW_USUARIO  } from "../../types";
import clienteAxios from "../../config/axios";


/*Creando usuario*/
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
