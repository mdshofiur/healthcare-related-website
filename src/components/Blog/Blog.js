import React from 'react';
import {Container,Col,Card,Row} from 'react-bootstrap'

const Blog = () => {
    return (
        <div className="text-center">

              <div className="bg-info p-5 text-light">
                  <h2>Blog</h2>
              </div>

          <div>
      <Container className="mt-5">
     <Row xs={3} md={3} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="https://stylemixthemes.com/masterstudy/white-lms/wp-content/uploads/sites/7/2015/04/photo-1509099836639-18ba1795216d-370x193.jpeg" />
        <Card.Body>
          <Card.Title>South African universities trail other BRICS</Card.Title>
          <Card.Text>
         <p className="text-start"> South Africa has eight of the top 15 universities in Africa but its higher learning institutions are rated as the worst performing among the BRICS emerging market nations.</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card>
        <Card.Img variant="top" src="https://stylemixthemes.com/masterstudy/white-lms/wp-content/uploads/sites/7/2015/06/photo-1495968283540-e1df41995ba6-370x193.jpeg" />
        <Card.Body>
          <Card.Title>Our main target is to “Developing Yourself as a Leader”</Card.Title>
          <Card.Text>
          <p className="text-start">The upcoming budget for the Chicago Public Schools will rely on $500 million in yet-to-be-enacted pension savings by Illinois, school officials said on Monday.</p>
          </Card.Text>
        </Card.Body>
      </Card>
 </Col>

       <Col>
      <Card>
        <Card.Img variant="top" src="https://stylemixthemes.com/masterstudy/white-lms/wp-content/uploads/sites/7/2015/05/photo-1512790182412-b19e6d62bc39-370x193.jpeg" />
        <Card.Body>
          <Card.Title>Body Cameras on Public-School Educators</Card.Title>
          <Card.Text>
            <p className="text-start"> Some of can`t rely on stable worlds economic, so learn, learn and learn everything new, this will help you anytime, dont be upset, believe yourself even.</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

        <Col>
      <Card>
        <Card.Img variant="top" src="https://stylemixthemes.com/masterstudy/white-lms/wp-content/uploads/sites/7/2015/06/photo-1490376840453-5f616fbebe5b-370x193.jpeg" />
        <Card.Body>
          <Card.Title>Those Other College Expenses You Aren`t Thinking About</Card.Title>
          <Card.Text>
          <p  className="text-start">Thousands of teenagers across the UK will have school lessons in mindfulness in an experiment designed to see if it can protect against mental illness.</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
   
       </Row>
        </Container>
          </div>
        </div>
    );
};

export default Blog;