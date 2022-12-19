import { composeWithDevTools } from "@redux-devtools/extension";
import {createStore} from "redux"
import rootReducer from "./productActions/rootReducer";


const  store = createStore(rootReducer,composeWithDevTools())//google search using redux devtool

export default store;