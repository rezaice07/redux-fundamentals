import React from 'react';
import {increament,decreament} from '../services/actions/CounterAction'
import {useSelector,useDispatch} from 'react-redux';

const CounterTwo=()=> {

    const count = useSelector(state=> state.CounterReducer.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={()=>dispatch(increament(5))}>Increament</button>
            <button onClick={()=>dispatch(decreament(2))}>Decreament</button>
        </div>
    )
}

export default CounterTwo
