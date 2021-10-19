import React from 'react';
import {Card,Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom';

const ServiceData = (props) => {

     const {title,desc,img,id} = props.service;

     const history = useHistory();
     const handelClick = () => {
      history.push(`/service/${id}`)
  
 }
 

    return (
    <Card >
  <Card.Img variant="top" className="mt-2" src={img} />
  <Card.Body>
    <Card.Title>{title.slice(0,150)}</Card.Title>
    <Card.Text>
      {desc}
    </Card.Text>
    <Button variant="primary" onClick={handelClick}>Learn More</Button>
  </Card.Body>
</Card>
    );
};

export default ServiceData;