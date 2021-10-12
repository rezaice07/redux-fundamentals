import  {increament_value,decreament_value} from '../Types'

const initialState={
    count:0
}

const counterReducer  = (state =initialState,action)=>{
    switch(action.type){

        case increament_value:
            return {
                ...state,
                count:state.count+action.payload
            }

        case decreament_value:
            return {
                ...state,
                count:state.count-action.payload
            }            
        default:
            return state
    }
}

export default counterReducer 