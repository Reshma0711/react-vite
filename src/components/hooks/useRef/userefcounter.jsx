import { useRef, useState } from "react"




const UseRefexample=()=>{
    const reference=useRef(0)
    const [count,setCount]   =useState(0)      
    const incrementHandler=()=>{
        reference.current+=1;
        setCount(count+1)                                                                                                                                                               
        console.log(reference.current)
    }
    return(
        <>
        <h2>UseRefCounter:{reference.current}</h2>
         <h2>UseStateCounter:{count}</h2>
        <button onClick={incrementHandler}> onClick</button>
        </>
    )
}

export default UseRefexample