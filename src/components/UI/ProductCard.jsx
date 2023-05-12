

import React from 'react'


import { motion } from 'framer-motion'

import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';

const ProductCard = ({product}) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id : product.id,
        productName : product.productName,
        price : product.price,
        imgUrl : product.imgUrl,
      })
    )

    toast.success('Product added successfully')

  }



  return (
      <Col  lg='3' md='4' className="mb-2">
       <div className="product__item">
           <div className="product__img">
             
              <Link to={`/shop/${product.id}`}> <motion.img whileHover={{scale:0.9}} src={product.imgUrl} alt="" /></Link>
           </div>
          <div className="p-2  product__info"> <h3 className="product__name">
           <Link to={`/shop/${product.id}`}>{product.productName}</Link>
           </h3>
           <span >
            {product.category}
           </span>
           </div>

          <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">₹{product.price}</span>
            <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
            <motion.button whileHover={{scale:1.1}} className='buy'>
                    Add to Cart</motion.button>
            </motion.span>
          </div>
       </div>
      </Col>
  );
}

export default ProductCard