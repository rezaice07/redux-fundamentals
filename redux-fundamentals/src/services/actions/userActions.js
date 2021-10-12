import { users_request, get_users_success, get_users_failed } from '../Types'
import axios from 'axios'

// export const usersList = () => {
//     return async (dispatch) => {
//         try {
//             dispatch({
//                 type: users_request
//             })

//             var url = "https://jsonplaceholder.typicode.com/posts";
//             const res = await axios.get(url);
//             console.log(res.data);
//             dispatch({
//                 type: get_users_success,
//                 payload: res.data
//             })

//         } catch (error) {
//             dispatch({
//                 type: get_users_failed,
//                 payload: error.message
//             })
//         }
//     }
// }

export const usersList = () => {
    return (dispatch) => {

        dispatch({
            type: users_request
        })
        
        var url = "https://jsonplaceholder.typicode.com/posts";
        axios.get(url)
        .then( res=>{
            dispatch({
                type: get_users_success,
                payload: res.data
            })
        }).catch(error=>{
            dispatch({
                type: get_users_failed,
                payload: error.message
            })
        })        
    }
}


