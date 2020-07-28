import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Portfoliopage(props) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant='top' src={require(`../../images/${props.image}`)} alt={props.name}/>
      <Card.Body>
        <Card.Title><strong><u>{props.name}</u></strong></Card.Title>
        <Card.Text>{props.description}<br /><br />
        <strong>Technology: </strong>
        {props.technology.map(data => (
            <li>{data}</li>
        ))}
        </Card.Text>
        <Button target='blank' href={props.homepage}>{props.name}</Button>
      </Card.Body>
    </Card>
  );
}
