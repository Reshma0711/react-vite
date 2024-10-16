




import React, { useCallback, useState } from 'react'
import MainHeading from '../../heading/heading1';
import { Button } from 'react-bootstrap';
import CustomButton from '../../button/button1';

const Usecallbackexample = () => {

    const [toggle,setToggle]=useState(false);
    const[num,setNum]=useState(1)

    


    const toggleHandler=useCallback(()=>{
        setToggle(!toggle)
    },)





    //   const toggleHandler=()=>{
    //      console.log(toggle)
    //       setToggle(!toggle)
    //   }


    const numHandler=useCallback(()=>{
        setNum(num+1)
    },[num])


    //   const numHandler=()=>{
    //     setNum(num+1)
    //   }

  return (



    <div>
      {
        toggle?"welcome user":"Please Login"
      }
    
    <MainHeading heading={"Reshma"}/>
    
    <h3>Count is : {num}</h3>


   <CustomButton onPress={toggleHandler} text={"Toggle"}/>
    <CustomButton onPress={numHandler} text={"Count"} />

    {/* <Button onClick={numHandler}>Num Change</Button>
    <Button onClick={toggleHandler}>Click Toggle</Button> */}


    </div>
  )
}

export default Usecallbackexample;
