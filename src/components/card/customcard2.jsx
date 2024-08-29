



import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CustomCard({id,title,onClick}) {
  return (
    <Card style={{ width: '15rem' ,display: "flex", rowGap:"5px" }}>
      <Card.Body onClick={onClick}>
        <Card.Title>{id}</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>  
       <Button  onClick={onClick} style={{ backgroundColor: 'Green' }}>OddEvenCheck</Button>  
      </Card.Body>
    </Card>
  );
}

export default CustomCard;




function CustomCard1({id,title,onClick}) {
  return (
    <Card style={{ width: '15rem' ,display: "flex", rowGap:"5px" }}>
      <Card.Body onClick={onClick}>
        <Card.Title>{id}</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>  
      </Card.Body>
    </Card>
  );
}

export {CustomCard1};
