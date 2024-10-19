import { useState } from "react";







const ThemeChanger=()=>{

    const [theme,setTheme]=useState(true)

     const themeHandler=()=>{
        setTheme(!theme)
     }




    return(
        <>
      

      <div  style={{width:"100%",height:"100vh",backgroundColor: theme ? "grey":"black" }}>
      
      <button onClick={themeHandler}>ThemeChange</button>
      
      
      </div>
  </>


    )





}

export default ThemeChanger;