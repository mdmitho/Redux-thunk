import { composeWithDevTools } from "@redux-devtools/extension";
import {applyMiddleware, createStore} from "redux"
import logger from "redux-logger";
import cartCounter from "./middleWares/cartCounter";
import rootReducer from "./productActions/rootReducer";


const  store = createStore(rootReducer,composeWithDevTools(applyMiddleware(cartCounter)))//google search redux logger

export default store;