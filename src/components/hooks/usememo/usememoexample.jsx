  








import React, { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'

const Usememoexample = () => {
     

    const [milk,setmilk]=useState(1)
    const [rice,setrice]=useState(1)

     
     const milkprice=useMemo(()=>{

        console.log("milk calculated...");
        const priceofmilk = 50;
        return milk * priceofmilk;

    },[milk])




     const riceprice = useMemo(() => {
       console.log("rice calculated...");
       const priceofrice = 100;
       return rice * priceofrice;
     }, [rice]);



      const milkHandler=()=>{
        setmilk(milk+1)
      }
      

      const riceHandler=()=>{
        setrice(rice+1)
      }




  return (
    <div>
      <h4>
        Milk quantity:{milk} price {milkprice}
      </h4>
      <h4>
        Rice quantity:{rice} price {riceprice}
      </h4>

      <Button onClick={milkHandler}>Change milk qty</Button>
      <Button onClick={riceHandler}>Change rice qty</Button>
    </div>
  );
}

export default Usememoexample
