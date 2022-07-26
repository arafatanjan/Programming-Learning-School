import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Program from './Program'
import './Services.css'
// import MiddleItems from '../MiddleItems/MiddleItems'




const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('program.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <Container className=''>
                <h4 className="font-weight bold mt-3 mb-3">Our Services</h4>
                <div className="service-container pl-3">
                    {services.map(service => <Program
                        key={service.id}
                        program={service}
                    ></Program>)}
                </div>
            </Container>


            {/* <div>
                {services.map(service => <MiddleItems
                    key={service.id}
                    middleitem={service}
                ></MiddleItems>)}
            </div> */}

        </div>
    );
};

export default Services;