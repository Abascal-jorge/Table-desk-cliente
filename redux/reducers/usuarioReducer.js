import { OBTENER_USUARIO } from "../../types";

const initialState = {
    usuarios: null
};

export default function (state = initialState, action){

    switch (action.type) {
        case OBTENER_USUARIO:
            return {
                ...state,
                usuarios: action.payload
            }
        default:
            return {...state};
    }
}