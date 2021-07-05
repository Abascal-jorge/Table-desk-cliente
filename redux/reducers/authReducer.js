import { OBTENER_USUARIO,
         NEW_USUARIO,
         QUITAR_MENSAJE } from "../../types";

const initialState = {
    auth: null,
    newUsuario: false
};

export default function (state = initialState, action){

    switch (action.type) {
        case OBTENER_USUARIO:
            return {
                ...state,
                auth: action.payload
            }
        case NEW_USUARIO:
            return {
                ...state,
                newUsuario: true
            }
        case QUITAR_MENSAJE:
            return{
                ...state,
                newUsuario: false
            }
        default:
            return {...state};
    }
}