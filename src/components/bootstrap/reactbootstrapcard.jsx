



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomDnaloader from '../loader/dnaloader';
import Linerloader from '../loader/linerloader';
import CustomToastify from '../Toasters/customtoast';
import CustomHeart from '../heart/heart';
import { AiFillHeart } from "react-icons/ai";
import CustomCounter from '../class/counter';


function CustomreactCard(prop) {
    const {title="Reshma",text="FrontEndDev"}=prop
  return (
    <Card style={{ width: '100'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <CustomCounter/>
        {/* <AiFillHeart /> */}
        <Linerloader/><br/><br/>
        <CustomToastify message="I am a card"/><br/>
        <CustomHeart/>
        <Button variant="primary">Click Me!</Button>
      </Card.Body>
    </Card>
  );
}


export default CustomreactCard