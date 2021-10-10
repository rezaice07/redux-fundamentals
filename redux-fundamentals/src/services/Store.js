import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'


const initialState={
    count:0
}

export const store=createStore(
    rootReducer, //<= combine reducer
    initialState,
    composeWithDevTools(applyMiddleware(logger))
    //applyMiddleware(logger)
)

