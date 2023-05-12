import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import productsData from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet';
import "../styles/home.css";

import { Container, Row, Col } from 'reactstrap';


import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

import Clock from '../components/UI/Clock';

import '../components/Slider/Slider';


import counterImg from '../assets/images/timer.png';
import Slider from '../components/Slider/Slider';
import ProductShow from '../components/ProductShow/ProductShow';

const Home = () => {



  const [trendingProducts, setTrendingProducts]= useState([]);
  const [bestSalesProducts, setBestSalesProducts]= useState([]);
  const [blinkenProducts, setBlinkenProducts]= useState([]);
  const [homeProducts, setHomeProducts]= useState([]);
  const [popularProducts, setPopularProducts]= useState([]);
  const year = new Date().getFullYear()
  
  useEffect(() => {

    const filteredTrendingProducts = productsData.filter((item) => item.category === 'blinken')

    const filteredBestSalesProducts = productsData.filter((item) => item.category === 'Telivision')

    const filteredHomeProducts = productsData.filter((item) => item.category === 'homeAppliances')

    const filteredBlinkenProducts = productsData.filter((item) => item.category === 'washingMachine')

    const filteredPopularProducts = productsData.filter((item) => item.category === 'homeAppliances')

    
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts)
     setBlinkenProducts(filteredBlinkenProducts)
     setHomeProducts(filteredHomeProducts)
    setPopularProducts(filteredPopularProducts)
  }, [])

  return ( 
     <Helmet title={'Home'}>
 
        <Slider/>        
        
        <Services/>
       
        <section className="trending__products">
          <Container>
            <Row>
              <Col lg="12" className='text-center'>
                  <h2 className='section__title'>Trending Products</h2>
              </Col>
              <ProductsList products={trendingProducts}/>
            </Row>
          </Container>
        </section>
         <Link to={'/shop'}> <ProductShow/></Link>
       
             
             <section className="best__sales">
              <Container>
                <Row>
                  <Col lg="12" className="text-center">
                    <h2 className="section__title" > Best Sales
                    </h2>
                  </Col>
                   <ProductsList products={bestSalesProducts}/>
                   <ProductsList products={homeProducts}/>

                </Row>
              </Container>
             </section>
              
              <section className="timer__count">
                <Container>
                  <Row>
                    <Col lg='6' md='6' className='count__down-col'>
                         
                      <div className="clock__top-content">
                        <h4 className="text-white fs-6 mb-2">Sale Live Now</h4>
                        <h3 className="text-white fs-5 mb-3">BLINKen Smart TV just at ₹11999</h3>
                      </div>
                      <Clock/>
                      <motion.button whileHover={{scale:1.1}} className="buy__btn store__btn">
                        <Link to="/shop">Shop Now</Link>
                      </motion.button>
                    </Col>
                    <Col lg='6' md='6' className='text-end'>
                      <img src={counterImg} alt="" />
                    </Col>
                  </Row>
                </Container>
              </section>

              <section className="new__arrivals">
                <Container>
                  <Row>
                  <Col lg="12" className="text-center mb-5">
                  <h2 className='section__title'>New Arrivals</h2>
                  </Col>
                     <ProductsList products={trendingProducts}/>
                     <ProductsList products={homeProducts}/>
                  </Row>
                </Container>
              </section>
                  
              <section className="popular_category">
                <Container>
                  <Row>
                  <Col lg="12" className="text-center mb-5">
                  <h2 className='section__title'>Popular in Category</h2>
                  </Col>
                     <ProductsList products={bestSalesProducts}/>
                     
                  </Row>
                </Container>
              </section>
      </Helmet>
  );
};

export default Home;