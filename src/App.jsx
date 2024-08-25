
import './App.css'

import CustomLogin from './components/login/login2'
import { CustomLogin3 } from './components/login/login2'
import { CustomLogin2 } from './components/login/login2'


const App=()=>{
 
  
  return(
    
     <>
      {/* <CustomLogin text="reshma">
      how are you?
      <MainHeading heading="I am Good"/>
      </CustomLogin>
      
     <CustomLogin text="vasanthi">
       where are you?
      </CustomLogin> */}



      <CustomLogin isAdmin={true}/>
      <CustomLogin isAdmin={false}/>

      <CustomLogin2 isAdmin={true}/>
      <CustomLogin2 isAdmin={false}/>

      <CustomLogin3 isAdmin={null}/>
      
      <CustomLogin3 isAdmin={undefined}/>


        </> 
  )
}
export default App
