import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomHeart from '../heart/heart';

function CustomCard(prop) {
  const{title,image,description,brand,price}=prop
  return (
    <Card style={{ width: '50' }}>
      <Card.Img variant="top" src={image} height={250} width={250}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          Brandname:<h5>{brand}</h5>
        </Card.Text>
       <div className="d-flex align-items-center justify-content-between">
           <Button variant="primary">{price}</Button>
        <CustomHeart/>
        </div>
       
      </Card.Body>
    </Card>
  );
}

export default CustomCard;