import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";





const Example2=()=>{

    const [salary,setSalary]=useState(100000);
    const salaryRef=useRef(0)
   
    console.log("code reaches1")

    useEffect(() => {
salaryRef.current=salary
console.log("code reaches2")
    },[salary]);


    const salaryHandler=()=>{
            setSalary(salary+10000)
    }


    return (
      <>
    
        <h3>{salary}</h3>
        <h3>Salary:{salaryRef.current}</h3>
        <Button onClick={salaryHandler}>Increment</Button>
    
      </>
    );
}

export default Example2