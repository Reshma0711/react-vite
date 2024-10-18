import { useContext } from "react";
import { Userdetails } from "../navigation/navigationstack";
import { Button } from "react-bootstrap";
import WithProfile from "../hoc/withprofile";








const SettingScreen = (props) => {

  

  console.log(props,"hi")
const {themeHandler,username}=useContext(Userdetails);
    

const changeTheme=()=>{
  themeHandler();
}

  return (
    <>
      <h1>WELCOME TO Setting Screen</h1>
      <h1>welcome</h1>
      <h3>Welcome {username}</h3>
      <Button style={{color:"white"}} onClick={changeTheme}>ChangeTheme</Button>
    </>
  );
}

export default WithProfile(SettingScreen);