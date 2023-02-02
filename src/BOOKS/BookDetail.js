import React from 'react';
import { useState, useEffect } from "react";
import {Bookdata} from './Bookdata';
import './styles/productD.css'

const currency = number => {
  return number.toLocaleString("en", {style: "currency", currency: "USD", minimumFractionDigits: 2});
}

const BookDetail = ({name, match }) => {
  const { params: { productId }} = match;
  const product = Bookdata[productId];
  const [image, setImage] = useState("image");
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
      setCalculation(() => count *(product.price));
    }, [count]); // <- add the count variable here

  return (
    <>


   
<div className='container shadow-lg rounded w-100'>
  <div className='row'>
    <div className='col-lg-6 col-md-12 col-12'>
    <img className='product-image mt-5 ms-5 w-75 h-75'style={{widht:'5em'}} src={product.img} alt='product' />

    </div>
    <div className='col-lg-6 col-md-12 col-12'>
         <p className='name' style={{fontSize:'2.2em',marginTop:'1.8em', marginLeft:'1.8em'}}>{ product.name }</p>
        
          

          <h4 className='color' style={{fontSize:'25px',marginLeft:'7em'}}>Quantity:</h4>
                 <p className='disp-count' style={{fontSize:'25px',marginLeft:'7em'}}><strong>Count</strong>: {count}</p>
                 <div className='count w-25 rounded ' style={{marginLeft:'22em',display:'flex', marginTop:'-4.8em'}}>
                 <button onClick={() => setCount((c) => c + 1)}>+</button>
                 <button onClick={() => setCount((c) => c - 1)}>-</button>
             
            
                
               

                 </div>
                 <div className='price mt-2 ms-5'>
                <p className='somme me-5'style={{fontSize:'35px',marginLeft:'-8.8'}} >La somme est: <span style={{fontSize:'40px',color:'blue',marginLeft:'1em'}}>{calculation}€</span></p>
                </div>

                <h4 className='color mt-5' style={{fontSize:'25px',marginLeft:'6em'}}><strong>Size:</strong></h4>
                 <select class="form-select w-25"style={{marginLeft:'17em',marginTop:'-3em'}} id="validationCustom04" required>
                         <option selected disabled value="">Choose Size</option>
                         <option>Small</option>
                         <option>Large</option>
                        <option>Xlarge</option>
                        <option>xxlarge</option>
                 </select>

          <div className='redirect mt-5 me-5'>
          <a className='Buy rounded ' href='/BuyProduct'style={{marginLeft:'12em'}}><button >Buy Now</button></a>
          <a className='Back rounded me-5' href="/"><button > Back to Home</button></a>

          </div>
       

    </div>

  </div>

</div>
    
    
    </>

     
    
     
    
       
      
 
    
  )
};

export default BookDetail;