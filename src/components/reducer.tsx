import React, { useReducer } from 'react'

const reducers= (state,action)=>{
  if(action.type === "increase"){
    return state.name;
  }
}



const reducer = () => {

  const [state,dispatch]=useReducer(reducers,{
  name:""
})
  return (
     <>
      <h2>Count: {state}</h2>

      <button onClick={() => dispatch({name:"ali" ,type: "increase" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrease" })}>
        -
      </button>
    </>
  )
}

export default reducer