





import React from 'react'
import { useState } from 'react'

const Crud = () => {

   const [input,setInput]=useState("")
   const [todos,setTodos]=useState([])
   const [selected,setSelected]=useState(null)

   const inputHandler=(e)=>{

    setInput(e.target.value)
      

   }

  const addTodo=()=>{
    if(input){
        setTodos([...todos,input])
        console.log(todos,"addtodo handler")
       
    }
     setInput("");
  }

  
const delHandler = (id) => {
  const filteredData = todos.filter((_, index) => index !== id); // Use strict inequality
  setTodos(filteredData);
};


const updateHandler=(id)=>{
      setSelected(id)
      console.log(id,"update")  
      const value=todos[id]
      setInput(value)
     
}

const updateTodo=(event)=>{
      event.preventDefault()
      console.log("update");
      const todofiltered=[...todos]
      todofiltered[selected]=input
      setTodos(todofiltered)
      setInput("")
      setSelected(null);
}

  return (
    <>
      <input type="text" value={input} onChange={inputHandler} />

      <button onClick={selected!==null?updateTodo:addTodo}>{selected!==null ? "update" : "add"}</button>

      <h3>My todos</h3>
      {todos?.map((item, index) => {
        return (
          <>
            <h3>{item}</h3>
            <button
              onClick={() => {
                delHandler(index);
              }}
            >
              del
            </button>
            <button
              onClick={() => {
                updateHandler(index);
              }}
            >
              update
            </button>
          </>
        );
      })}
    </>
  );
}

export default Crud

