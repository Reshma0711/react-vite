import { RiFacebookBoxFill } from "react-icons/ri";





import React, { useContext } from 'react'
import { Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalCounter } from "../navigation/navigationstack";
import { decrementAction, incrementAction, resetAction } from "../navigation/counterHelper";

const Categoryscreen = () => {

  const {currentstate,dispatch}=useContext(GlobalCounter)

  const incrementHandler=()=>{
    dispatch(
     incrementAction
    )
  }


  const decrementHandler = () => {
    if(currentstate.count>0){
dispatch(decrementAction);
    }
    else{
      alert("Action will not be performed  because of negative values")
    }
  };

  const resetHandler=()=>{
    dispatch(resetAction)
  }




  return (
    <div>
      <div>
        {/* <Button>
          <Link to="electronics">Electronics</Link>
        </Button> */}
        <Button style={{ backgroundColor: "black", color: "white" }}>
          <Link to="Jewellery">Jewellery</Link>
        </Button>
        <Button onClick={incrementHandler}>INCREMENT</Button>
        <Button onClick={decrementHandler}>DECREMENT</Button>
        <Button onClick={resetHandler}>RESET</Button>
      </div>
      <h2>category-Screen</h2>
      <Outlet />
    </div>
  );
}

export default Categoryscreen
