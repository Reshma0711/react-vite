import { useState } from "react"





const Crudpractice=()=>{
     
    const [input,setInput]=useState("")
    const [todos,setTodos]=useState([])
    const [selectedId,setSelectedId]=useState(null)


    
    const inputhandler=(e)=>{
        console.log(e.target.value)
        setInput(e.target.value)       
    }
    

    const submitHandler=()=>{
        setTodos([...todos,input])
         setInput("");
    }

    const delHandler=(id)=>{
        const filteredData=todos.filter((_,index)=> id!==index)
        setTodos(filteredData)
    }
    

    const updateHandler=(id)=>{
          setSelectedId(id);
         const value=todos[id]   
            setInput(value);
    }

    const updatetodohandler=()=>{  
        const newtodos=[...todos];
        newtodos[selectedId]=input;
        setTodos(newtodos)
        setSelectedId(null)
        setInput("")
    }

   return (
     <>
       <input
         type="text"
         placeholder="Enter the text"
         value={input}
         onChange={inputhandler}
       />
       <button onClick={selectedId!==null?updatetodohandler:submitHandler}>{selectedId!==null?"update":"addtodo"}</button>

        {
           
           todos.map((value,index)=>{
                return (
                  <>
                    <h1>{value}</h1>
                    <button onClick={()=>{delHandler(index)}}>Del</button>
                    <button onClick={()=>{updateHandler(index)}}>Update</button>
                  </>
                );
           })


        }
     </>
   );


}

export default Crudpractice