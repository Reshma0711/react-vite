import { useState } from "react"
import CustomCard from "../../card/customcard2"
import {oddEven} from './js-helper'

const EvenOdd=()=>{
         const [num,setnum] =useState(oddEven())
          const [result, setResult] = useState("???.."); 
         const numCheck=(val)=>{
                if(val%2==0||val==0){
                  setResult("Even");
                }
                else{
                  setResult("odd")
                }
         }
    return(
        <>
         <h4>Card is Even or Odd: {result}</h4>
         <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {num.map((value,index) => {
          return (
            <div key={index} style={{ flex: "1 1 calc(25% - 10px)" }}>
              <CustomCard onClick={()=>numCheck(value)} title={`Num is ${value}`} />
            </div>
          );
        })}
         
      </div>
        
      </>
     
    )
}

export default EvenOdd