import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useReducer } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "INCREMENT_AGE":
      return { ...state, age: state.age + action.payload };
     case "CHANGE_NAME":
      return  {...state,username:action.payload}
      case "ADD_TODO":
        return {...state,todos:[...state.todos,action.payload]}
    default:
      return state;
  }
};

const ReducerExample = () => {
  const initialState = {
    username: "Reshma",
    age: 23,
    todos: ["Wake up", "Breakfast"],
    homeAddress: {},
  };

  const [currentState, dispatch] = useReducer(reducerFunction, initialState);
   const [name,setName]=useState("")
   const [todo,setTodo]=useState("")

 const todoHandler=(e)=>{
        setTodo(e.target.value)
 }  


 const onSubmitTodo=()=>{
      dispatch({
        type:"ADD_TODO",
        payload:todo
      })
 }

const onsubmit=()=>{

  dispatch({
    type:"CHANGE_NAME",
    payload:name
  })

}
   
const nameHandler=(e)=>{
    setName(e.target.value)
}


  const incrementHandler = () => {
    dispatch({
      type: "INCREMENT_AGE",
      payload:1
    });
  };

  return (
    <div>
      <h1>{currentState.username}</h1>
      <input type="text" value={name} onChange={nameHandler} />
      <Button onClick={onsubmit}>Submit</Button>
      <h3>{currentState.age}</h3>
      <Button onClick={incrementHandler}>INCREMENT AGE</Button><br/>
     <input type="text" placeholder="todo" value={todo} onChange={todoHandler}/>
     <Button onClick={onSubmitTodo}>Add todo</Button>
      {
        currentState.todos.map((val)=>{
          return (
            <>
              <h5>{val}</h5>
            </>
          );
         
})
      }
    </div>
  );
};



export default ReducerExample;
