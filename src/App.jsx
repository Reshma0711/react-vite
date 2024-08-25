
import './App.css'
import MainHeading from './components/heading/heading1'
import CustomList, { CustomList2 } from './components/lists/list1.jsx'
import {CustomOrderList,CustomList1} from './components/lists/list1.jsx'
import CustomImage from './components/images/image1.jsx'


const App=()=>{
  return(
     <div>
    <MainHeading/>
    <CustomList/>
    <CustomOrderList/>
    <CustomList1/>
    <CustomImage/>
    <CustomList2/>
     </div>
  )
}
export default App
