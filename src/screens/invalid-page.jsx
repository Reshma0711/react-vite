import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar/navbar";








const InvalidScreen=()=>{
    <NavBar/>
  const navigation=useNavigate()
        const handleNavigation=()=>{
            navigation("/")
        }
    return(
     <Button onClick={handleNavigation}>Back to Home</Button>
    )
}

export default InvalidScreen;