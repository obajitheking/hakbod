import React from 'react'
import hi5 from '../../images/ewa2.jpg'
import hi6 from '../../images/ewa1.jpg'

const Check = () => {
  return (
    <div className='container check1'>
        <h1>Checkout <span>Our</span> Products</h1>
        <div className='hare'>
        <div className='card-1'>
            <img src={hi5} alt='hi' />
            <div className='card1'>
            <h2>Ofada Sauce Powders </h2>
            <p>Ofada sauce is about the most delicious native savory dish that packs a major punch as it is flavored with smoked shrimp and fermented locust beans (iru) that fills your house with the sweet smell of hope, hope that something delicious is cooking.
 </p></div>
        </div>
        <div className='card-1'>
            <img src={hi6} alt='hi' />
            <div className='card1'>
            <h2>Bean Sauce Powders </h2>
            <p>The Agoyin sauce powder is a blend of peppers and local spices that brings out the taste of the local beans popularized in Lagos by the Togolese people. Its' aromatic blend make eating of beans an experience to savor.
 
 </p>
            </div>
        </div>
          
        </div>
    </div>
  )
}

export default Check