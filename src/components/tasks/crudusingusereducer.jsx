import { useReducer } from "react";


const reducerfunction=(state,action)=>{
    switch (action.type) {
      case "SET_INPUT":
        return { ...state, input: action.payload };

      case "ADD_TODO"  :
     return {...state,todos:[...state.todos,state.input],input:""};

       case "DEL_TODO":
       return{...state,todos:state.todos.filter((_,index)=>index!==action.payload)}

       case "SELECTED_ID":
        return {
          ...state,
          selectedId: action.payload,
          input: state.todos[action.payload],
        };

        case "UPDATE_TODO" :
             const newTodos = [...state.todos];
            newTodos[state.selectedId] = state.input;
          return {
        ...state,
         todos: newTodos,
        selectedId: null,
        input: "",
        };
    
      default:
        return state;
    }
}







const UsereducerCrud=()=>{

     const initialState={
        input:"",
        todos:[],
        selectedId:null
     }


     const [currentstate,dispatch]=useReducer(reducerfunction,initialState)
    


     const inputHandler=(e)=>{
           dispatch({
            type:"SET_INPUT",
            payload:e.target.value
           })
     }
    
     const addtodoHandler=()=>{
        dispatch({
            type:"ADD_TODO"
        })
     }

    
     const delHandler=(id)=>{
        dispatch({
            type:"DEL_TODO",
            payload:id
        })
     }

     const updateHandler=(id)=>{

        dispatch({
          type: "SELECTED_ID",
          payload:id
        });


     }

       const updatetodoHandler=()=>{
           dispatch({
            type:"UPDATE_TODO"
           })
       }

    return(
        <>
      
        <input type="text"  value={currentstate.input} onChange={inputHandler} placeholder="Enter the text"/>
        <button onClick={currentstate.selectedId!==null? updatetodoHandler:addtodoHandler}>Add todo</button>
        {
            currentstate.todos.map((val,index)=>{
                return(
                    <>
                    
                      <h1>{val}</h1>
                      <button onClick={()=>{delHandler(index)}}>del</button>
                    <button onClick={()=>{updateHandler(index)}}>Update</button>
                    </>
                )
            })
        }
        </>
    )
}


export default UsereducerCrud;