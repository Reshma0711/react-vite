




 import React, { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
 
 const usememoexample2 = () => {
         const[num,setnum]= useState(1)
    const [salary,setsalary]= useState(10000)
    
 

     const numHandler = () => {
       setnum(num + 1);
     };

     const salaryHandler = () => {
       setsalary(salary + 10000);
     };


   
     const numevenodd = useMemo(()=>{
 return num % 2 == 0 ? "Num is Even" : "Num is Odd";
    },[num])

   return (
  


     <div>
        <h4>
       NUMBER:{num} EVENODD {numevenodd}
      </h4>
      <h4>
       SALARY:{salary} 
      </h4>

      <Button onClick={numHandler}>Change Num</Button>
      <Button onClick={salaryHandler}>Increase Salary</Button>
     </div>
   )
 }
 
 export default usememoexample2
 