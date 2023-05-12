import React from 'react'
import { useState } from 'react';

import '../styles/compare.css'




function Compare() {

    const products =[{
        "id": 0,
        "title": "",
        "price": "",
        "description": "",
        "brand": "",
        "image": "https://cdn.pixabay.com/photo/2017/04/20/07/08/select-2244784_1280.png"
    }, {
        "id": 1,
        "title": "Blinken 43 Inch Ultra",
        "price": 179999,
        "description": "Blinken 24 inch Ultra Series HD Ready LED TV design utilizes the entire screen so you can focus on the content as it uses a super-slim bezel. A screen bezel is an area that surrounds a screen or a border between a screen and a device frame. The introduction of flat-panel screens has contributed in a massive way to frameless TVs.",
        "brand": "Blinken ",
        "image": "https://trapthedeal.dousoftit.com/uploads/product/Blinken%20TV%2043%20inch%20(1)%20(1).jpg"
    }, {
        "id": 2,
        "title": "Blinken 24 Inch Ultra ",
        "price": 129999,
        "description": "Blinken 24 inch Ultra Series HD Ready LED TV design utilizes the entire screen so you can focus on the content as it uses a super-slim bezel. A screen bezel is an area that surrounds a screen or a border between a screen and a device frame. The introduction of flat-panel screens has contributed in a massive way to frameless TVs.",
        "brand": "Blinken",
        "image": "https://trapthedeal.dousoftit.com/uploads/product/24%20inch.jpg"
    }, {
        "id": 3,
        "title": "Kelvinator 300 L Direct",
        "price": 22234,
        "description": "The efficient way with which Kelvinator's direct cool refrigerators work will surprise you! With this fridge, you bring home an appliance that understands optimum temperature and freshness of food items. As a plus, it is easy to use and can take rough usage. And all of this in a sleek, trendy design that uplifts the look of your home",
        "brand": "Kelvinator",
        "image": "https://trapthedeal.dousoftit.com/uploads/product/Screenshot%202023-04-14%20133521.png"
    }, {
        "id": 4,
        "title": "Samsung 300L Direct",
        "price": 35499,
        "description": "With this Samsung refrigerator in your kitchen, you can make eating fresh fruits and delicious dishes made of nutrient-rich vegetables a priority every day. This home appliance features a Digital Inverter Compressor for a durable function and a Stabilizer-free Operation to keep your food fresh",
        "brand": "Samsung",
        "image": "https://trapthedeal.dousoftit.com/uploads/product/Samsung-230L-3-Star-Single-Door-Refrigerator.jpg "
    }, {
        "id": 5,
        "title": "LG Window AC",
        "price": 35499,
        "description": "With this Samsung AC in your Bedroom, you can make eating fresh fruits and delicious dishes made of nutrient-rich vegetables a priority every day. This home appliance features a Digital Inverter Compressor for a durable function and a Stabilizer-free Operation to keep your food fresh eve",
        "brand": "LG",
        "image": "https://trapthedeal.dousoftit.com/uploads/product/LG-DUAL-Inverter-Window-AC-3-Star.jpg"
    }, {
        "id": 6,
        "title": "Voltas Window AC ",
        "price": 32999,
        "description": "Keep your room cool even in sweltering summers with the Voltas 1.5 Ton Window AC. It features the High Ambient Cooling and the Fresh Air Ventilation to cool your room instantly and allow fresh air inside your room. This technology helps in cooling down your room instantly even at a 50-degree Celsius temperature.",
        "brand": "Voltas",
        "image": "https://trapthedeal.dousoftit.com/uploads/product/1670996819.png"
    }, {
        "id": 7,
        "title": "Whirphool fully Automatic Washing Machine",
        "price": 10999,
        "description": "360° Bloomwash Pro has a wide edge to edge, one piece glass lid which gives a better and more convenient drum access. Get rid of everyday stains with the all-new Hotmatic Technology. ",
        "brand": "Whirphool",
        "image": "https://trapthedeal.dousoftit.com/uploads/product/1672731671.jpg"
    }, {
        "id": 8,
        "title": "Voltas Beko 8 Kg Semi-Automatic",
        "price": 32999,
        "description": "Its a Semi-automatic washing machines,economical, low water and energy consumption, manual effort is involved; Has both washing and drying functions..",
        "brand": "Voltas",
        "image": "https://trapthedeal.dousoftit.com/uploads/product/61wDvRNqs9L._SX679_.jpg"
    }, {
        "id": 9,
        "title": "LG Split AC",
        "price": 20499,
        "description": "Split AC with inverter compressor: variable speed compressor which adjusts power depending on heat load. It is most energy efficient and has lowest-noise operation",
        "brand": "LG",
        "image": "https://trapthedeal.dousoftit.com/uploads/product/LG-Super-Convertible-5-In-1-Cooling-Split-AC.jpg"
    }, {
        "id": 10,
        "title": "Whirlpool Supreme Cool ",
        "price": 26299,
        "description": "BrandWhirlpoolCapacity1.5 TonsCooling Power3200 WattsSpecial FeatureInverter, Dust_filterEnergy Star3 StarAbout this itemSplit AC; 1.5 ton capacityEnergy Rating: 3 StarWarranty: 1 year on product, 1 year on condenser, 10 years on compressor100% CopperCools up to 55 degreesHd filter",
        "brand": "Whirphool",
        "image": "https://trapthedeal.dousoftit.com/uploads/product/1670998689.jpg"
    }];
      
      
        const [selectedProduct1, setSelectedProduct1] = useState(0);
        const [selectedProduct2, setSelectedProduct2] = useState(0);
      
        function handleSelect1Change(event) {
          setSelectedProduct1(event.target.value);
        }
      
        function handleSelect2Change(event) {
          setSelectedProduct2(event.target.value);
        }
      
        function handleItem1Click() {
          if (selectedProduct1 !== selectedProduct2) {
            setSelectedProduct1(selectedProduct1);
          } else {
            setSelectedProduct1(0);
          }
        }
      
        function handleItem2Click() {
          if (selectedProduct2 !== selectedProduct1) {
            setSelectedProduct2(selectedProduct2);
          } else {
            setSelectedProduct2(0);
          }
        }
      
    
  return (
    <>
    <h1 style={{color:'#595A5C', fontSize:'30px'}} class="display-5 my-5 text-center">Compare Products</h1>
    <div className="select" style={{textAlign:"center"}}>
      
       <select  id="select1" onChange={handleSelect1Change}>
        {products.map((product, index) => (
          <option key={index} value={index}>{product.title}</option>
        ))}
      </select>

      <select  id="select2" onChange={handleSelect2Change}>
        {products.map((product, index) => (
          <option key={index} value={index}>{product.title}</option>
        ))}
      </select>
       


      <div className="container">

            
         <div className="box">
             <img  src={products[selectedProduct1].image} alt=""  />
             <div id="price1"><h6>Price ₹: </h6><p>{products[selectedProduct1].price}</p></div>
             <div id="desc1"><h6>Description:</h6><p>{products[selectedProduct1].description}</p></div>
             <div id="brand1"><h6>Brand:</h6><p>{products[selectedProduct1].brand}</p></div>
             <button onClick={handleItem1Click}>Add to Cart</button>
         </div>

         <div className="box">
             <img  src={products[selectedProduct2].image} alt="" />
             <div id="price2"><h6>Price ₹: </h6> <p>{products[selectedProduct2].price}</p></div>
             <div id="desc2"><h6>Description: </h6><p>{products[selectedProduct2].description}</p></div>
             <div id="brand2"><h6>Brand: </h6><p>{products[selectedProduct2].brand}</p></div>
             <button onClick={handleItem2Click}>Add to Cart</button>
         </div>
      </div>
    </div>
    </>
  )
}

export default Compare