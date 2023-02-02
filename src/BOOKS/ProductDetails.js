import React from 'react';

import {products} from './products';
import './styles/productD.css'

const currency = number => {
  return number.toLocaleString("en", {style: "currency", currency: "USD", minimumFractionDigits: 2});
}

const ProductDetails = ({name, match }) => {
  const { params: { productId }} = match;
  const product = products[productId];

  return (
    <>


   
<div className='container shadow-lg'>
  <div className='row'>
    <div className='col-lg-6'>
    <img style={{widht:'5em'}} src={product.img} alt='product' />

    </div>
    <div className='col-lg-6'>
         <p className='name' style={{fontSize:'2.2em',marginTop:'1.5em', marginLeft:'5.8em'}}>{ product.name }</p>
         <h4 style={{fontSize:'2.2em',marginTop:'1.5em', marginLeft:'7.8em'}}>{ currency(product.price) }</h4>
          <p style={{fontSize:'1.5em',marginTop:'1.5em', marginLeft:'7.8em'}}>{ product.description }</p>
          <div className='redirect mt-5'>
          <a className='Buy rounded mt-3' href='/BuyProduct'style={{marginLeft:'14em'}}><button >Buy Now</button></a>
          <a className='Back rounded me-5 mt-3' href="/"><button > Back to Home</button></a>

          </div>
       

    </div>

  </div>

</div>
    
    
    </>

     
    
     
    
       
      
 
    
  )
};

export default ProductDetails;