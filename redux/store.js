import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import  rootReducer from "./reducers/index";


//El apartado de typeof para abajo es para que el navegador pueda obtener los datos
const Store = () => createStore( rootReducer, compose( applyMiddleware(thunk),
                                                typeof window === "object" &&
                                                typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ?
                                                        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
                                )
);

export const wrapper = createWrapper(Store);