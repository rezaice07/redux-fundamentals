import { combineReducers } from 'redux'

import counterReducer from './CounterReducer'
import userReducer from './userReducer'


export default combineReducers({
    counterReducer: counterReducer,
    userReducer: userReducer
}
)