import { OBTENER_USUARIO,
         NEW_USUARIO } from "../../types";

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
        default:
            return {...state};
    }
}