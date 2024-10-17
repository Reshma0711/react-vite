import CustomHeart from "../components/heart/heart";
import useAxios from "../components/hooks/customhook/useaxios";











const AboutScreen = () => {

  const [recipes,error,loading]=useAxios('https://dummyjson.com/recipes');

 console.log(recipes,error)
  return (
    <>
      <h1>WELCOME TO ABOUT SCREEN</h1>
      <CustomHeart />
    </>
  ); 
}

export default AboutScreen;