import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isActive,setIsActive]=useState(false)
  const intervalRef = useRef(null); 
    useEffect(()=>{
       
        if(isActive){
       intervalRef.current=  setInterval(()=>{  setCount((prevCount) => prevCount + 1);},500)
       }
       

      
      else if (!isActive && intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
      }
       
       return () => clearInterval(intervalRef.current);
}
    
        
    
    ,[isActive])


    const startHandler=()=>{
          setIsActive(true)  
    }
   

    const pauseHandler=()=>{
         setIsActive(false)
    }


    const stopHandler=()=>{
        setIsActive(false)
        setCount(0)
    }

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={startHandler}>Start</button>
      <button onClick={pauseHandler}>Pause</button>
      <button onClick={stopHandler}>stop</button>
    </>
  );
};

export default Counter;
