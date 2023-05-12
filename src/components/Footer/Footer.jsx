

import React from 'react';

import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Footer = () => {

  
  return <footer className="footer">
     <Container>
      <Row>
        <Col lg='4' className="mb-4" md='6'>
        <div className="logo">
                    <img src={logo} alt="logo"/>
                    <div>
                       
                    </div>
                </div>
                <p className="footer__text mt-4">
                    We, Trapthedeal, are fast-growing B2B and B2C e-commerce startup, 
                    TrapTheDeal is an online buying platform for 
                    </p>
           </Col>

        <Col lg='3' md='3' className="mb-4">
                
                <div className="footer__quick-links">
                  <h5 className="quick__links-title">Top Categories</h5>  
                   
                   <ListGroup className="footer__contact">
                    <ListGroupItem className="ps-0 border-0">
                      <Link to='#'>BLINKen TVs</Link>
                    </ListGroupItem>

                    <ListGroupItem className="ps-0 border-0">
                      <Link to='#'>Home Appliances</Link>
                    </ListGroupItem>

                    <ListGroupItem className="ps-0 border-0">
                      <Link to='#'>Air Conditoner</Link>
                    </ListGroupItem>

                    <ListGroupItem className="ps-0 border-0">
                      <Link to='#'>Washing Machines</Link>
                    </ListGroupItem>

                   </ListGroup>
                                  
                </div>
              
           </Col>

        <Col lg='2' md='2' className="mb-4"> 
        <div className="footer__quick-links">
                  <h5 className="quick__links-title">Useful Links</h5>  
                   
                   <ListGroup className="footer__contact">
                    <ListGroupItem className="ps-0 border-0">
                      <Link to='/shop'>Shop</Link>
                    </ListGroupItem>

                    <ListGroupItem className="ps-0 border-0">
                      <Link to='/cart'>Cart</Link>
                    </ListGroupItem>

                    <ListGroupItem className="ps-0 border-0">
                      <Link to='/login'>Login</Link>
                    </ListGroupItem>

                    <ListGroupItem className="ps-0 border-0">
                      <Link to='#'>Privacy Policy</Link>
                    </ListGroupItem>

                   </ListGroup>
                                  
                </div>
        </Col>

        <Col lg='3' md='4'>
        <div className="footer__quick-links">
                  <h5 className="quick__links-title">Contact</h5>  
                   
                   <ListGroup className="footer__contact">
                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                     <span><i class="ri-map-pin-line"></i></span>
                     <p>Studio no-2, iHDP Business Park, Noida </p>
                    </ListGroupItem>

                    <ListGroupItem className="ps-0 border-0  d-flex align-items-center gap-2">
                    <span><i class="ri-phone-line"></i></span>
                     <p>+918877665544</p>
                    </ListGroupItem>

                    <ListGroupItem className="ps-0 border-0  d-flex align-items-center gap-2">
                    <span><i class="ri-mail-line"></i></span>
                     <p>care@trapthedeal.com</p>
                    </ListGroupItem>

                   </ListGroup>
                                  
                </div>
           </Col>   

           <Col lg='12'>
            <p className="footer__copyright">
            © TrapTheDeal 2023 | All Rights Reserved
            </p>
           </Col>
                 

      </Row>
     </Container>
  </footer>
};

export default Footer