import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";








const InvalidScreen=()=>{
  const navigation=useNavigate()
        const handleNavigation=()=>{
            navigation("/")
        }
    return(
     <Button onClick={handleNavigation}>Back to Home</Button>
    )
}

export default InvalidScreen;