import  {increament_value,decreament_value} from '../Types'

export const increament = (pl)=>{
    return{
        type:increament_value,
        payload:pl
    }
}

export const decreament = (pl)=>{

    return{
        type:decreament_value,
        payload:pl
    }
}