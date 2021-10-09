import {createStore} from 'redux'
import rootReducer from './reducers/index'


const initialState={
    count:0
}

export const store=createStore(
    rootReducer, //<= combine reducer
    initialState
)

