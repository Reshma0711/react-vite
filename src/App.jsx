
import './App.css'
import Greeting from './components/greeting/greeting'

import MainHeading from './components/heading/heading2'
// import CustomImage from './components/images/image1'
import CustomList from './components/lists/list1'



const App=()=>{
 const names= ["pushpa","reshma","nikhi"]
  
  return(
    <>
    <MainHeading heading={"List of Names"}>
      
     <CustomList list={["pushpa","reshma","nikhi"]}/>

    </MainHeading>  
  <Greeting text={"hello"}>
    <h5>Everyone</h5>
  </Greeting>
 
    {
      names.map((eachval,index)=>{
        return (
          <h2 key={index}><Greeting/> {eachval}</h2>
        )
      })
    }
      

      
      






        </> 
  )
}
export default App
