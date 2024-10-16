import { useContext } from "react";
import { Userdetails } from "../navigation/navigationstack";
import { Button } from "react-bootstrap";
import withProfile from "../hoc/withprofile";








const SettingScreen = (props) => {

  const {profile}=props

  console.log(profile.firstname)
const {themeHandler,username}=useContext(Userdetails);
    

const changeTheme=()=>{
  themeHandler();
}

  return (
    <>
      <h1>WELCOME TO Setting Screen</h1>
      <h1>welcome {profile}</h1>
      <h3>Welcome {username}</h3>
      <Button style={{color:"white"}} onClick={changeTheme}>ChangeTheme</Button>
    </>
  );
}

export default withProfile(SettingScreen);