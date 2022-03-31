import React,{useReducer} from 'react'

const initialState = {count : 0}

type counterState = {
    count : number
}
type Action = ResetAction | UpdateAction

type ResetAction = {
    type: 'reset'
}

type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

const reducer = (state:counterState, action: Action) => {
    switch (action.type) {
        case'increment' :
            return {count: state.count + action.payload}
        case'decrement' :
            return {count: state.count - action.payload}
        case'reset' :
            return initialState
        default :
            return state
    }
}



const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        Count:{state.count}
        <button onClick={() => dispatch({type: 'decrement', payload: 10})}>-</button>
        <button onClick={() => dispatch({type: 'increment',payload: 10})}>+</button>
        <button onClick={() => dispatch({type: 'reset' })}>Reset</button>
    </div>
  )
}

export default Reducer