import { useState } from "react"





const withCounter =(Component)=>{
    return ()=>{

       const [count,setCount]=useState(0)

     const incrementHandler=()=>{
        setCount(count+1)
     }
        return <Component count={count} incrementCount={incrementHandler}/>
    }
}


export default withCounter