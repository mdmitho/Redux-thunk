import {combineReducers} from "redux"
import productReducer from "../reducer/productReducer"
import { filterReducer } from "./filterReducer"


const  rootReducer = combineReducers({
    product : productReducer,
    filter : filterReducer,
})

export default rootReducer ;
