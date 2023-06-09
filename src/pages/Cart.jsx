import React, {useState, useEffect } from 'react'
import "../styles/cart.css"

import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { cartActions } from '../redux/slices/cartSlice'



const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  useEffect(() => {
    window.scrollTo(0,0)
  },[cartItems])

  return (
    <Helmet title={'Cart'}>
        <CommonSection title={'Shopping Cart'} />
        <section>
          <Container>
            <Row>
              <Col lg='9'>

              {
                cartItems.length === 0 ? (<h2 className='fs-4 text-center'>No item added to the cart</h2>) : (
                  <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
  
                  <tbody>
                    {
                      cartItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))
                    }
                  </tbody>
                </table>
                )
              }


              
              </Col>

             {
              totalQuantity > 0 ? 
              ( <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>Subtotal
                <span className='fs-4 fw-bold'>₹{totalAmount}</span>
                </h6>
                <p className='fs-6 mt-2'>
                  taxes and shipping will calculated in checkout
                </p>
                <div>
                  <button className="buyNow w-100">
                    <Link to='/checkout'>Checkout</Link>
                  </button>
                  <button className="buyNow w-100 mt-3">
                    <Link to='/shop'>Continue Shopping</Link>
                  </button>
                </div>
              </div>
            </Col>) : ''
             }

            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

const Tr = ({item}) => {

 
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);
  const [totalPrice, setTotalPrice] = useState(item.price * item.quantity);
  

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
      
      
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  console.log(item);


  useEffect(() => {
    const updateTotalPrice = () => {
      setTotalPrice(price * quantity);
    };
    updateTotalPrice();
  }, [quantity, price]);
  
  return (
    <tr>
      <td><img src={item.imgUrl} alt="Product_img" /> </td>
      <td>{item.productName}</td>
      <td>₹{item.price}</td>
      <td>
        <button style={{border:'none'}} onClick={() => handleQuantityChange('decrement')}><i class="ri-subtract-fill"></i></button>
        <span>{quantity}px</span>
        <button  style={{border:'none'}} onClick={() => handleQuantityChange('increment')}><i class="ri-add-line"></i></button>
      </td>
      <td><motion.i whileTap={{scale : 1.2}} onClick={deleteProduct} className="ri-delete-bin-line"></motion.i></td>
      <td>₹{totalPrice}</td>
    </tr>
  )
}

export default Cart