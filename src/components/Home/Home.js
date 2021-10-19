import React from 'react';
import {Carousel} from 'react-bootstrap'
import Service from '../Services/Service';


const Home = (props) => {


    
    return (
        <div>
            <div className="slider">
     <Carousel>
    <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/crWP4ST/psychare-header.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h2>Best Psychology  &amp; Counseling</h2>
      <h3>We Help you to Understand the Problem.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/HVpntWQ/slider-2-1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2>Excellent therapy services</h2>
      <h3>Professional psychologists are available.</h3>
    </Carousel.Caption>
  </Carousel.Item>
   </Carousel>
            </div>

      <div>
         <Service></Service>
      </div>
   
         </div>
    );
};

export default Home;