

import React from 'react'

import { motion } from 'framer-motion';

import "./product-show.css"



const ProductShow = () => {
  return (
<div className="product-list-container">


    <div className="product">

    <motion.img whileHover={{scale:0.99}} src="https://trapthedeal.dousoftit.com/uploads/highlight_products/1675312192.jpg" alt="img1" onClick={'/shop'} />
      
    </div>

    <div className="product1">

     <div className="top__div">

        <div className="top">
        <motion.img whileHover={{scale:0.99}}  src="https://trapthedeal.dousoftit.com/uploads/highlight_products/website%20banner%20New-04-min.jpg" alt="img1" />
         </div>
         <div className="top">
         <motion.img whileHover={{scale:0.99}} src="https://trapthedeal.dousoftit.com/uploads/highlight_products/website%20banner%20New-05-min%20(1).jpg" alt="img1" />
         </div>
  
    </div>

         <div className="bottom__div">
         <motion.img whileHover={{scale:0.99}} src="https://trapthedeal.dousoftit.com/uploads/highlight_products/website%20banner%20New-03-min%20(1).jpg" alt="img1" />
         </div>
     
    </div>

    <div className="product">

    <motion.img whileHover={{scale:0.99}} src="https://trapthedeal.dousoftit.com/uploads/highlight_products/website%20banner%20New-02-min%20(1).jpg" alt="img1" />
      
    </div>
</div>
  )
}

export default ProductShow