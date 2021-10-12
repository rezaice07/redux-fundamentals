import {createStore, applyMiddleware} from 'redux'
import combineReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

import thunk from 'redux-thunk';


const initialState={
    count:0
}

export const store=createStore(
    combineReducer, //<= combine reducer
    initialState,
    composeWithDevTools(applyMiddleware(logger,thunk))
    //applyMiddleware(logger)
)

