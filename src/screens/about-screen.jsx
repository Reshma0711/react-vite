import { useContext } from "react";
import CustomHeart from "../components/heart/heart";
import { GlobalCounter } from "../navigation/navigationstack";











const AboutScreen = () => {

  const {currentstate,dispatch}=useContext(GlobalCounter)
  console.log(currentstate, dispatch);
  return (
    <>
      <h1>WELCOME TO ABOUT SCREEN</h1>
      <h3>Current Count:{currentstate.count}</h3>
      <CustomHeart />
    </>
  ); 
}

export default AboutScreen;