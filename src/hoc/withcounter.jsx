import { useState } from "react"





const WithCounter =(Component)=>{
   

       const [count,setCount]=useState(0)

     const incrementHandler=()=>{
        setCount(count+1)
     }
        return <Component count={count} incrementCount={incrementHandler}/>
    }



export default WithCounter