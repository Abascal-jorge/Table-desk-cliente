import { OBTENER_USUARIO } from "../../types";

const initialState = {
    auth: null
};

export default function (state = initialState, action){

    switch (action.type) {
        case OBTENER_USUARIO:
            return {
                ...state,
                auth: action.payload
            }
        default:
            return {...state};
    }
}