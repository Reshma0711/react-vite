



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomreactCard(prop) {
    const {title="Reshma",text="FrontEndDev"}=prop
  return (
    <Card style={{ width: '100'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Click Me!</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomreactCard;