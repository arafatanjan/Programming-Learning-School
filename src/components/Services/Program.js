import React from 'react';
import Card from 'react-bootstrap/Card';

const Program = (props) => {
    // const { name, description, img } = props.friend
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.program?.img} />
            <Card.Body>
                <h6 className='bg-success p-2'>Name: {props.program?.name}</h6>
                <Card.Text>
                    <h6>Description: {props.program?.description}</h6>
                </Card.Text>
                <h6 className='d-inline p-2 bg-primary text-white'>Price: {props.program?.price}</h6>
            </Card.Body>
        </Card>
        // <div>
        //     <h6>Name: {props.program?.name}</h6>
        //     <h6>Description: {props.program?.description}</h6>
        //     <h6>Price: {props.program?.price}</h6>
        //     <img src={props.program?.img} />
        // </div>
    );
};

export default Program;