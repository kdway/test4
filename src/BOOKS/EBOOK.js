import React from 'react';
import { Link,component } from "react-router-dom";
import { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ProductAlerts from './ProductAlerts';

import {products} from './products';
import {Bookdata} from './Bookdata';
import {Data} from './Data';
import {Data1} from './Data1';
import {Data2} from './Data2';
import {DataMonteauFemme} from './DataMonteauFemme'
import './styles/ebook.css'
    


const EBOOK = ({ name, match }) => {
  const share = () => {
    window.alert('The product has been shared!');
  }

  const [color, setColor] = useState("red");
  const [image, setImage] = useState("/a1.webp");
  const [image1,setImage1] = useState("/m1.jpg")
  const onNotify = () => {
    window.alert('You will be notified when the product goes on sale');
  }

  const Ref = useRef(null);
  
  // The state for our timer
  const [timer, setTimer] = useState('00:00:00:00');


  const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      const days = Math.floor((total /1000 /60 /60 )% 24);
    
      return {
          total,days, hours, minutes, seconds
      };
  }


  const startTimer = (e) => {
      let { total,days,  hours, minutes, seconds } 
                  = getTimeRemaining(e);
      if (total >= 0) {

          // update the timer
          // check if less than 10 then we need to 
          // add '0' at the beginning of the variable
          setTimer(
              ( (days > 0 ? days : '0' + days) + ':' +
                hours > 0 ? hours : '0' + hours) + ':' +
              (minutes > 0? minutes : '0' + minutes) + ':'
              + (seconds > 0 ? seconds : '0' + seconds)
          )
      }
  }


  const clearTimer = (e) => {

      // If you adjust it you should also need to
      // adjust the Endtime formula we are about
      // to code next    
      setTimer('00:01:00:00');

      // If you try to remove this line the 
      // updating of timer Variable will be
      // after 1000ms or 1sec
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
          startTimer(e);
      }, 1000)
      Ref.current = id;
  }

  const getDeadTime = () => {
      let deadline = new Date();

      // This is where you need to adjust if 
      // you entend to add more time
      deadline.setSeconds(deadline.getSeconds() +1200 );
      return deadline;
  }

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
      clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
      clearTimer(getDeadTime());
  }

  return (
    <>
    <div className="submit text-center shadow-lg bg-white s-3.2">
 
   

  <div class="card-body">
    <h5 class="card-title"></h5>
       <p class="text3 text-align-center"> WINNTER SALE 2023 </p>
    <p class="text4">PLEASE SUBSCRIBE TO HAVE MORE SALES OFFERS</p>
    <div className='days ms-5' style={{fontSize:'35px',color:'red'}}> 25% SALE FOR 15 DAYS</div>
    
    <div className="App">
            <h2>{timer}</h2>
    </div>
    
    <a href="#" class="btn btn-info"><span style={{fontSize:'1.8em'}}>SUBMIT</span></a>
  </div> 
  
  
  
</div>


  
    
  



<div className="product-list shadow-lg" style={{marginTop:'10em'}}>
    

    {Bookdata.map((product, index) => {
      return (
        <div className="card">
          <h3>
            <Link to={`${match.url}Bookdata/${index}`} title={`${product.name} details`}> 
             
              <img className='image h-100' src={ product.img}></img>
            </Link>
          </h3>
          {product.description && <p style={{fontSize:'22px'}}>{`Description: ${product.description}`}</p>}
          
          <strike><h3 className='price' style={{marginLeft:'2em'}}>{product.price}.00£</h3></strike>
          <h3 className='price bg-info' style={{marginLeft:'7em',marginTop:'-1.5em'}}>{product.priceReduction}.00£</h3>

          <button onClick={share}>
            Share
          </button>
          <ProductAlerts product={product} notify={onNotify} />
        </div>
      )
    })}
  </div>
        






<div className="product-list shadow-lg" style={{marginTop:'10em'}}>
    

    {products.map((product, index) => {
      return (
        <div className="card">
          <h3>
            <Link to={`${match.url}products/${index}`} title={`${product.name} details`}> 
             
              <img className='image h-100' src={ product.img}></img>
            </Link>
            
          </h3>
          {product.description && <p style={{fontSize:'22px'}}>{`Description: ${product.description}`}</p>}
          <h3 className='price' style={{marginLeft:'5em'}}>{product.price}.00£</h3>
          <button onClick={share}>
            Share
          </button>
         
          <ProductAlerts product={product} notify={onNotify} />
        </div>
      )
    })}
  </div>


  <div class="card-group mt-5 justify-contenent-space-between">
  <div class="card m-2 rounded shadow-md">
    <img src="w11.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Marketing Book For Success Business</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div className='rating ms-5'>
      <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
    </div>
  
  </div>
  <div class="card m-2">
    <img src="w11.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className='rating ms-5'>
      <span class="fa fa-star checked s-2"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star "></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
  </div>
  <div class="card m-2">
    <img src="w11.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className='rating ms-5'>
      <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked "></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
  </div>
</div>


<div class="card-group mt-5 justify-contenent-space-between">
  <div class="card">
    <img src="w11.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className='rating ms-5'>
      <span class="fa fa-star checked s-2"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
  </div>
  <div class="card">
    <img src="w11.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className='rating ms-5'>
      <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
  </div>
  <div class="card">
    <img src="w11.webp" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className='rating ms-5'>
      <span class="fa fa-star checked s-2"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>
     <span class="fa fa-star checked"></span>

      </div>
   
      <h3 class="price ms-3 mb-3">18 £</h3>
      <div class="card-footer ms-5">
      <button>Buy Now</button>
    </div>
  </div>
</div>





{/*Einzel Product description*/}

<div className="container shadow-lg" style={{width:'120em', height:'40em'}}>

    {Data.map((product, index) => {
      return (
        
          <div className='row'>
            <div className='col-lg-4'>
                     
                     
                     <img className='image w-100 h-75 mt-3' src={image} alt='Enzel-product'></img>
                    



        </div>       

           
            <div className='col-lg-8'>
                  
                 <h3 className='price mt-4' style={{marginLeft:'8.6em'}}>{product.name}</h3>
                 <h3 className='price mt-4' style={{marginLeft:'12.8em'}}>{product.price}.00£</h3>
                 {product.description && <p className='description ms-5' style={{fontSize:'22px'}}>{`Description: ${product.description}`}</p>}
                 <Link to={`${match.url}products/${index}`} title={`${product.name} details`}>  </Link>


                 <h4 className='disp-colors ms-5'><strong>Disponsible Colors :</strong></h4>
<button type="button" className='blue bg-danger ms-5 m-1 mt-5 rounded'style={{width:'5em',height:'2.8em'}}   onClick={() => setImage("./a1.webp")}></button>

<button type="button" className='blue bg-secondary ms-5 m-1 mt-5 rounded' style={{width:'5em',height:'2.8em'}}  onClick={() => setImage("./a2.webp")}></button>


<button type="button" className='blue bg-warning m-1 ms-5 mt-5 rounded' style={{width:'5em',height:'2.8em'}}  onClick={() => setImage("./a4.webp")}></button>

<button type="button" className='blue bg-info ms-5  m-1 mt-5 rounded'style={{width:'5em',height:'2.8em'}}   onClick={() => setImage("./a3.webp")}></button>



                 <h4 className='color mt-5 mb-2' style={{fontSize:'25px',marginLeft:'2em'}}><strong>Disponsible Size:</strong></h4>
                 <select class="form-select w-25"style={{marginLeft:'17em',marginTop:'-3em'}} id="validationCustom04" required>
                         <option selected disabled value="">Choose Size</option>
                         <option>Small</option>
                         <option>Large</option>
                        <option>Xlarge</option>
                        <option>xxlarge</option>
                 </select>

                 <a href='/BuyProduct'><button type="button" className='blue bg-info rounded mt-5'style={{width:'7.2em',height:'3em',marginLeft:'20em'}}>Buy Now</button></a>

          </div>

        
         
           


            </div>

        
          
          
            
      
        
      )
    })}
  </div>


{/*Einzel Product description*/}


{/*Einzel Product description*/}

<div className="container shadow-lg">

    {Data1.map((product, index) => {
      return (
        
          <div className='row'>
            <div className='col'>
            <Link to={`${match.url}products/${index}`} title={`${product.name} details`}> 
             
             <img className='image h-50 w-100' src={ product.img} alt='Enzel-product'></img>
           </Link>

            </div>
            <div className='col mt-5'>
                  
            <h3 className='price' style={{marginLeft:'3.6em'}}>{product.name}</h3>
          <h3 className='price' style={{marginLeft:'8em'}}>{product.price}.00£</h3>
          {product.description && <p style={{fontSize:'22px'}}>{`Description: ${product.description}`}</p>}
       
   <div className='choice-color' style={{marginLeft:'4em'}}>
   <h1>Disponsible Colors :</h1>
   <img className='image h-100 w-100' src={image} alt='Enzel-product'></img>
   <button type="button" className='blue bg-info m-2 mt-5 rounded'style={{width:'5em',height:'2.8em'}}   onClick={() => setImage("./a1.webp")}></button>

<button type="button" className='blue bg-secondary m-2 mt-5 rounded' style={{width:'5em',height:'2.8em'}}  onClick={() => setImage("./a2.webp")}></button>


<button type="button" className='blue bg-warning m-2 mt-5 rounded' style={{width:'5em',height:'2.8em'}}  onClick={() => setImage("./a3.webp")}></button>

<button type="button" className='blue bg-white m-2 mt-5 rounded'style={{width:'5em',height:'2.8em'}}   onClick={() => setImage("./a4.webp")}></button>



   </div>
  


            </div>

          </div>
          
          
            
      
        
      )
    })}
  </div>


{/*Einzel Product description*/}

 {/*Translate test */}

 <div className="container shadow-lg" style={{width:'120em', height:'40em'}}>

    {DataMonteauFemme.map((product, index) => {
      return (
        
          <div className='row'>
            <div className='col-lg-4'>
                     
                     
                     <img className='image w-100 h-75 mt-3' src={image1} alt='Enzel-product'></img>
                    



        </div>       

           
            <div className='col-lg-8'>
                  
                 <h3 className='price mt-4' style={{marginLeft:'8.6em'}}>{product.name}</h3>
                 <h3 className='price mt-4' style={{marginLeft:'12.8em'}}>{product.price}.00£</h3>
                 {product.description && <p className='description ms-5' style={{fontSize:'22px'}}>{`Description: ${product.description}`}</p>}
                 <Link to={`${match.url}products/${index}`} title={`${product.name} details`}>  </Link>


                 <h4 className='disp-colors ms-5'><strong>Disponsible Colors :</strong></h4>
<button type="button" className='blue bg-danger ms-5 m-1 mt-5 rounded'style={{width:'5em',height:'2.8em'}}   onClick={() => setImage1("./m1.jpg")}></button>

<button type="button" className='blue bg-secondary ms-5 m-1 mt-5 rounded' style={{width:'5em',height:'2.8em'}}  onClick={() => setImage1("./m2.jpg")}></button>


<button type="button" className='blue bg-warning m-1 ms-5 mt-5 rounded' style={{width:'5em',height:'2.8em'}}  onClick={() => setImage1("./m3.jpeg")}></button>

<button type="button" className='blue bg-info ms-5  m-1 mt-5 rounded'style={{width:'5em',height:'2.8em'}}   onClick={() => setImage1("./m1.jpg")}></button>



                 <h4 className='color mt-5 mb-2' style={{fontSize:'25px',marginLeft:'2em'}}><strong>Disponsible Size:</strong></h4>
                 <select class="form-select w-25"style={{marginLeft:'17em',marginTop:'-3em'}} id="validationCustom04" required>
                         <option selected disabled value="">Choose Size</option>
                         <option>Small</option>
                         <option>Large</option>
                        <option>Xlarge</option>
                        <option>xxlarge</option>
                 </select>

                 <a href='/BuyProduct'><button type="button" className='blue bg-info rounded mt-5'style={{width:'7.2em',height:'3em',marginLeft:'20em'}}>Buy Now</button></a>

          </div>

        
         
           


            </div>

        
          
          
            
      
        
      )
    })}
  </div>


 


 {/*Translate test */}


 <div className="flex-container">

    {Data2.map((product, index) => {
      return (
        
          <div className='card flex-box shadow-lg'>
              <img className='image me-5' src={ product.img} alt='Einzel-product'></img>
       
    
       <h2 className='price' style={{marginLeft:'5em'}}>{product.price}.00£</h2>

       <a href='/MFDetails'>
       <button type="button" class="btn btn-dark mt-4"style={{width:'7.2em',height:'3em',marginLeft:'7em'}}>
    View Details
    </button></a>

          </div>
         
 )
    })}
  </div>


    
    </>
    
    
  )
};

export default EBOOK;