import React from 'react'
import ti from '../../images/test1.jpg'
import ti2 from '../../images/test2.jpg'
import ti3 from '../../images/test3.jpg'
import './testimonial.css'


const Testimonial = () => {

const wrapper = document.querySelector('.rapper');
const indicators = 
[...document.querySelectorAll('.indicators button')];    

let currentTestimonial = 0;

indicators.forEach((item, i) => {
  item.addEventListener('click', () =>{
    indicators[currentTestimonial].classList.remove('active');
    wrapper.style.marginleft= `-${100 * i}%`;
    item.classList.add('active');
    currentTestimonial = i;
  })
})
  return (
    <>
    <h1 className='rh'>What people are saying about us</h1>
    <div className='container hap'>
    <div className='rapper'>
    
      <div className='dup'>  
      <div  className="carder ">
          <img src={ti} alt='h'/>
        <div className='carder1'>   
           <p>"Mrs Ogunfemi is an amazing lecturer, she has impacted so much knowledge in me and thousands of students she has taught, her lectures are well explanative, understanding, her recipes are easy to follow. she is a mentor, everyday we keep learning from her. God bless you for all you have done for me."
            </p>
            <p className='card-syn1'>- NDUKWE SHULAMMITE OBIAGERI</p>
        </div>    
      </div>  
      </div>

      <div className='dup1'>
      <div  className="cardest ">
     
          <img src={ti2} alt='h'/>
        <div className='carder1 '>   
          <p>"Mrs Ogunfemi is an amazing lecturer, she has impacted so much knowledge in me and thousands of students she has taught, her lectures are well explanative, understanding, her recipes are easy to follow. she is a mentor, everyday we keep learning from her. God bless you for all you have done for me."
          </p>
          <p className='card-syn1'>- NDUKWE SHULAMMITE OBIAGERI</p>
      </div>    
      </div> 

      </div>

      <div className='dup2'>
      <div  className="cardest1 ">
        <img src={ti3} alt='h'/>
        <div className='carder1'>   
        <p>"Mrs Ogunfemi is an amazing lecturer, she has impacted so much knowledge in me and thousands of students she has taught, her lectures are well explanative, understanding, her recipes are easy to follow. she is a mentor, everyday we keep learning from her. God bless you for all you have done for me."
        </p>
        <p className='card-syn1'>- NDUKWE SHULAMMITE OBIAGERI</p>
      </div>    
      </div> 
      </div> 
  
      </div>
  
  
    </div>

    </>
  )
}

export default Testimonial