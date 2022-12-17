import { composeWithDevTools } from "@redux-devtools/extension";
import {createStore} from "redux"
import productReducer from "./reducer/productReducer"


const  store = createStore(productReducer,composeWithDevTools())//google search using redux devtool

export default store;