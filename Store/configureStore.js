import { combineReducers, createStore } from "redux";
import countReducer from "../src/Reducers/countReducers";

const rootReducer = combineReducers(
    {
        counter:countReducer
    }
)

const configureStore = () =>{
    return createStore(rootReducer);
}
export default configureStore;