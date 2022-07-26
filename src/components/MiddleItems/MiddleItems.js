
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import Program from '../Services/Program';
import './Middleitems.css';
import { Container } from 'react-bootstrap';

const MiddleItems = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('program.JSON')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 4)));
    }, [])


    return (
        <Container>
            <div className="middleitem-container ml-10px" >
                {services.map(service => <Program
                    key={service.id}
                    program={service}
                ></Program>)}
            </div>
        </Container>

    );
};

export default MiddleItems;