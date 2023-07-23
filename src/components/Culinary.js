import React from "react";
import food from "../images/food1.jpg";
import { AiFillCheckCircle} from "react-icons/ai";

const Culinary = () => {
  return (
    <div >
      <div className="container culinary_container">
      <div>
        <div className="wrap1">
          <h1>Culinary School</h1>
          <p>
            We are a culinary establishment that aims to help aspiring chefs
            learn and unlearn cooking techniques by grooming, teaching, and
            equipping them with the skills required to create and recreate the
            finest cuisine from around the world. Become the chef you’ve always
            wanted to be by acquiring the knowledge required for making
            wonderful cuisines and pastries.
          </p>
        </div>
      </div>
      <div className="img_food">
        <img src={food} alt='hee' />
      </div>
      </div>

      <div className="contai" id="main">
        <div className="purplebg boxe"></div>
        <div className="boxe1 cul_container">
          <div className="box">
            <h2>Cake Making and <br></br>Decoration</h2>
            <div className="fh">
              <h1>₦65,000</h1>
              <p className="rete">4 weeks</p>
            </div>
            <ul className="service__list">
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Basic Cakes</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Butter Cream</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Whipping Cream Frosting</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Basic Fondant Decoration</p>
              </li>
            </ul>
            <a href='/Culinary' className='btn-log6'>Get Started</a>
          </div>

          <div className="box">
            <h2>Professional Certicate <br></br>Decoration</h2>
            <div className="fh">
              <h1>₦65,000</h1>
              <p className="rete">3 months</p>
            </div>
            <ul className="service__list">
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Local cuisine</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Introduction to International cuisine</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Food and Beverage Services</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Food and Beverage Services</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Pastries</p>
              </li>
            </ul>
            <a href='/Culinary' className='btn-log4'>Get Started</a>
          </div>
          <div className="box">
            <h2>Professional Certicate <br></br>Decoration</h2>
            <div className="fh">
              <h1>₦65,000</h1>
              <p className="rete">6 months</p>
            </div>
            <ul className="service__list">
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>African Cuisine</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Continental dishes</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Pastries</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Dessert</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Bread making</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Ice cream & yogurt</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Healthy cooking</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>Food business</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>NABTEB certification</p>
              </li>
              <li>
                <AiFillCheckCircle className="service__list-icon" />
                <p>IT opportunities</p>
              </li>
            </ul>
            <a href='/Culinary' className='btn-log5'>Get Started</a>
          </div>

         
        </div>
      </div>
      <div className="contai" id="main">
        <div className="purplebg1 boxe2"></div>
        <div className="boxe1 cul_container1">
          <div className="box">
            <h2>Cake Making and <br></br>Decoration</h2>
            <div className="fh">
              <h1>₦65,000</h1>
              <p className="rete">4 weeks</p>
            </div>
            
            <a href='/Culinary' className='btn-log1'>Get Started</a>
          </div>

          <div className="box">
            <h2>Professional Certicate <br></br>Decoration</h2>
            <div className="fh">
              <h1>₦65,000</h1>
              <p className="rete">3 months</p>
            </div>
         
            <a href='/Culinary' className='btn-log1'>Get Started</a>
          </div>
             </div>

         
       
      </div>
    </div>
  );
};

export default Culinary;
