import React from 'react';
import {Container} from 'react-bootstrap'
import { AiTwotoneLike } from "react-icons/ai";


const About = () => {
    return (
        <div className="text-center">
              <div className="bg-primary p-5 text-light">
                  <h2>About</h2>
              </div>

              <Container className="mt-5">
              <div className="d-flex">
                  <div className="me-5 text-start">
                    <h3>Welcome to Master Study!</h3>
                      <p>Online studies are designed for students whose scheduling commitments would otherwise make it difficult to enroll in a full-time higher education program. Offered for individual courses, diplomas, associate’s degrees and certificate programs, online studies are a valuable option. The resulting qualification a graduate receives after successfully completing.</p>
                      <h5>Unordered and Ordered Lists:-</h5>
                      <p><AiTwotoneLike></AiTwotoneLike> Online Courses with full discount systems.</p>
                      <p><AiTwotoneLike></AiTwotoneLike> Online Certificates which can be used worldwide.</p>
                      <p><AiTwotoneLike></AiTwotoneLike> OAn online leadership development program at Masterstudy LMS..</p>
                    
                  </div>

                  <div>
                     <img src="https://stylemixthemes.com/masterstudy/white-lms/wp-content/uploads/sites/7/2018/07/cat_2-570x350.jpg" alt="" />
                  </div>
              </div>

              </Container>
        </div>
    );
};

export default About;