import React ,{useEffect}from 'react'
import {connect} from 'react-redux'
import {usersList} from '../services/actions/userActions'


const Users=({usersList,loading,users ,error})=> {

    useEffect(()=>{
        usersList()
    },[])

    return (
        <div>
            <h3>Users</h3>
            {
                loading ? <h5>Loading ....</h5>: error? <h5>{error}</h5>:
                <>
                {
                    users.map(user=>{
                        return <h4>{user.title}</h4>
                    })
                }
                </>
            }
        </div>
    )
}

const mapStateToProps=(state)=>({
loading:state.userReducer.loading,
users:state.userReducer.users,
error:state.userReducer.error,

})

export default connect(mapStateToProps,{usersList})(Users)
