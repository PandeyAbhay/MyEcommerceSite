import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

import productsData from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';
import '../styles/shop.css';

const Shop = () => {

  const [products, setProducts] = useState(productsData)

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if(filterValue === 'blinken') {
      const filteredProducts = productsData.filter((item) => item.category === 'blinken')

      setProducts(filteredProducts)

    }

    if(filterValue === 'fridge') {
      const filteredProducts = productsData.filter((item) => item.category === 'fridge')

      setProducts(filteredProducts)

    }

    if(filterValue === 'homeAppliances') {
      const filteredProducts = productsData.filter((item) => item.category === 'homeAppliances')

      setProducts(filteredProducts)

    }

    if(filterValue === 'Telivision') {
      const filteredProducts = productsData.filter((item) => item.category === 'Telivision')

      setProducts(filteredProducts)

    }

    if(filterValue === 'homeAppliances') {
      const filteredProducts = productsData.filter((item) => item.category === 'homeAppliances')

      setProducts(filteredProducts)

    }

  }


  const handleSearch = e => {
    const searchTerm = e.target.value;

    const searchProducts = productsData.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProducts(searchProducts)

  }


  return (
    <Helmet title='Shop'>
      <CommonSection title={'Products'} />

      <section>
        <Container>
          <Row>
            <Col>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option >Filter By Category</option>
                  <option value="homeAppliances">homeAppliances</option>
                  <option value="washingMachine">washingMachine</option>
                  <option value="blinken">blinken</option>
                  <option value="fan">fan</option>
                </select>
              </div>
            </Col>

            <Col className='text-end'> 
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg='6' md='12'>
              <div className="search__box">
                <input type="text" placeholder='Search...' onChange={handleSearch} />
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              products.length === 0 ? <h1 className='text-center fs-4'>No products are found</h1> : <ProductsList products={products} />
            }
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Shop