import { useState } from "react";
import jshelper from "./js-helper";
import CustomCard, { CustomCard1 } from "../../card/customcard2";
import Button from 'react-bootstrap/Button';

const Todo = () => {
  const [todos, settodos] = useState(jshelper());
  const  addHandler=()=>{
         const currentlength=todos.length;
       const  myObj={
            id:currentlength+1,
            text:`Item ${currentlength+1}`
         }
        
    settodos([...todos,myObj])
   }

  const delHandler = (targetid) => {
    const filtereditems = todos.filter((eachtodo) => eachtodo.id !== targetid);
    settodos(filtereditems);
  };

  const resetHandler=(targetid)=>{
    
  const updateditems =  todos.map((eachtodo)=>{
        if(eachtodo.id==targetid){
         return  {...eachtodo,text:`item updated`}
        }
        
        return eachtodo;
     })
     settodos(updateditems)
   }


  return (
    <>
      <h3>Custom Todo</h3>
      {/* Flex container to arrange the cards */}
       <Button style={{ backgroundColor: 'green' }} onClick={addHandler}>Add Card</Button>  
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {todos.map((eachTodo, index) => {
          return (
            <div key={index} style={{ flex: "1 1 calc(25% - 10px)" }}>
              <CustomCard1 id={eachTodo.id} title={eachTodo.text} />
               <Button  onClick={()=>delHandler(eachTodo.id)}style={{ backgroundColor: 'red' }}>Delete Card</Button>  
               <Button  onClick={()=>resetHandler(eachTodo.id)}style={{ backgroundColor: 'yellow', color:"black" }}>Update Card</Button>  
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
