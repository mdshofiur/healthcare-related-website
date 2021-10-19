import React from 'react';
import {useState,useEffect} from 'react'
import {Container,Row} from 'react-bootstrap'
import ServiceData from '../ServiceData/ServiceData';


const Service = () => {

const [service,setService] = useState([])
    
     useEffect(() =>{
          const url = './Service.json';
          fetch(url)
          .then((response) => response.json())
          .then(data => setService(data.data))
    
        }, [])

    return (
        <div>
            <Container className="mt-5">
           <h3 className="mb-3">Our Popular Services Course</h3>
           <Row xs={1} md={3} className="g-4">

           {
               service.map(service => <ServiceData
                key={service.id}
                service={service}
                ></ServiceData>
               )
            }

            
                 </Row>
                 </Container>

        </div>
    );
};

export default Service;