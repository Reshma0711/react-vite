

import './App.css' 
import CustomButton1 from './components/button/button1'




const App=()=>{

 const  onClick=(childdata)=>{
    console.log(childdata)
  }
 
  return (
     <>
       <CustomButton1 onPress={onClick}/>
    </>
    
 
       
  )
}
export default App



// App passes onClick as the onPress prop to CustomButton1.
// When the button is clicked, myPress in CustomButton1 sends an object with data ({ name: "Reshma", designation: "FrontEnd Dev" }) to the parent.
// The onClick function in App receives this data as childdata and logs it to the console.