import React from 'react'
import hi from '../../images/food2.jpg'
import hi2 from '../../images/erd.jpg'
import hi3 from '../../images/img 3.jpg'
import { Link } from 'react-router-dom'
import './our.css'


const Our = () => {


    const cards = [   
 

        {
            id: 1,
            imgUrl: hi,
            name : "Culinary",
            synopsis : "We have different programs tailored for your specific fashion career part. Our program helps you understand the reality of the creative and business side of fashion. ",
            btn : "See More",
    
    
        },   

    {
        id: 2,
        imgUrl: hi2,
        name : "Fashion",
        synopsis : "We have different programs tailored for your specific fashion career part. Our program helps you understand the reality of the creative and business side of fashion. ",
        btn : "See More",


    },
    {
        id: 3,
        imgUrl: hi3,
        name : "Entrepreneurship",
        synopsis : "Our entrepreneurship programs serve as a springboard for aspiring business owners by providing useful knowledge and expertise in whatever field you choose to specialize in.",
        btn : "See More",


    },
    
  
    
]    

const content = cards.map((card=>(
    <div  className=''>
        <div key={card.id} className="card">
     
            <img src={card.imgUrl} alt='h'/>
         <div className='card1'>   
            <h2>{card.name}</h2>
            <p className='card-syn'>{card.synopsis}</p>
            <Link to= '/Culinary'><a href='/Culinary' className='btn-log1'>{card.btn}</a></Link>
        </div>    
          </div>  

       
    </div>   
    
    )))
        


  return (
    <div>
        <h1 className='ghi'>Our Schools</h1>
        <div className='hare container'>
             {content}
        </div>
       
   
    </div>
  )
}

export default Our