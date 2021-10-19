import React from 'react';
import {Carousel} from 'react-bootstrap'
import Service from '../Services/Service';
import { GoLocation } from 'react-icons/go';
import './Home.css'

const Home = () => {

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

        {/*  Service Section  */}

      <div>
         <Service></Service>
      </div>
   
          {/*  Location Section  */}

       <div className="container mt-5">
              <div className="location-header">
              <h4 className="text-info">LOCATIONS</h4>
              <h2>Find Locations</h2>
              Some location data may continue to be saved in other settings, like Web and App Activity.
              </div>
                
               <div className="location">
               <div className="location-information">
                  <div className="icon"><GoLocation/></div>
                  <h3>Atlanta</h3>
                  <p>4047 Adonais Way, Georgia</p>
                  <button className="rounded-start button bg-info border-0 text-light">View Location</button>
                </div>  

                <div className="location-information">
                  <div className="icon"><GoLocation/></div>
                  <h3>Pittsburgh</h3>
                  <p>807 Spruce Drive, Pennsylvania</p>
                  <button className="rounded-start button bg-info border-0 text-light">View Location</button>
                </div>  

                <div className="location-information">
                  <div className="icon"><GoLocation/></div>
                  <h3>Davenport</h3>
                  <p>1589 Garfield Road, Illinois</p>
                  <button className="rounded-start button bg-info border-0 text-light">View Location</button>
                </div>    
               </div>
              </div>


           {/*  Meet Team Section  */}

             <div className="container">
                   <div className="text-center mt-5">
                   <p className="text-info">MEET TEAM</p>
                    <h2>Professional Psychologist</h2>
                    <p>Clinical psychology is an integration of science, theory, and clinical knowledge for the purpose of understanding.</p>
                   </div>

                   <div className="all-image">
                   <div className="img-section">
                     <img src="https://demo.moxcreative.com/therapica/wp-content/uploads/sites/44/2021/06/mature-psychologist-e1623738773389.jpg" alt=""/>
                     <h5 className="ms-5 mt-2">Elizabeth J Norwood</h5>
                     <p className="title mt-2">Psychologist</p>
                   </div>

                   <div className="img-section">
                     <img src="https://demo.moxcreative.com/therapica/wp-content/uploads/sites/44/2021/06/mature-psychologist-portrait-e1623738822150.jpg" alt=""/>
                     <h5 className="ms-5 ps-4 mt-2">Steve M Davis</h5>
                     <p className="title mt-2">Psychologist</p>
                   </div>


                   <div className="img-section">
                     <img src="https://demo.moxcreative.com/therapica/wp-content/uploads/sites/44/2021/06/vertical-portrait-of-mature-50-years-asian-business-woman-on-grey-background--e1623738911734.jpg" alt=""/>
                     <h5 className="ms-5 mt-2">Amy B Marchetti</h5>
                     <p className="title mt-2">Psychologist</p>
                   </div>
                   </div>

             </div>


         </div>
    );
};

export default Home;