
import { COUNTER_CHANGE, COUNTER_DECREMENT, COUNTER_INCREMENT } from "../Constants";
const intialState ={
    count:0
}

const countReducer = (state= intialState,action) =>{
    switch(action.type){
        case COUNTER_INCREMENT:
              return{
                ...state,
                count:state.count + 1
              }
        case COUNTER_DECREMENT:
            return {
                ...state,
                count:state.count-1
            }
          default :
                return state;
        }
    }
export default countReducer;

