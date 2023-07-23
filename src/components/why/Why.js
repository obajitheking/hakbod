import React from 'react'
import hi from '../../images/Ellipse 1.jpg'
import './why.css'

const Why = () => {



    const cards = [
  
        {
            id: 1,
            imgUrl: hi,
            name : "Professionals",
            synopsis : "The instructors at  Hakbod Vocational Centre are professionals from the field. Each instructor has their own passion or specialization. ",
       
    
    
        },
        {
            id: 2,
            imgUrl: hi,
            name : "Practical Courses",
            synopsis : "The best part of your practice are the practical classes at Hakbod Vocational Centre.After all that theory, you can finally get to work yourself.",
          
    
    
        },


        
    ]

    const content = cards.map((card=>(
        <div  className=''>
            <div key={card.id} className="zone1">
         
                <img src={card.imgUrl} alt='h'/>
                <h2>{card.name}</h2>
                <p className='how-syn'>{card.synopsis}</p>
              
              </div>  

           
        </div>    
            
    
        
    )))
  return (
    <div className='part1 container'>
        <div className='part2'>
            <h1>Why <span>Choose Us</span></h1>
            <p>Hakbods Vocational Centre is staffed by top chefs and fashion designers with decades of experience. 
            We have a team of energetic trained instructors who are eager to teach you everything they know and assist you in reaching all of your culinary and fashion goals.</p>
            <div className='part7'>
                <div >
                <h3>20+</h3>
                <p>instructors</p>
                </div>    
                <div>
                <h3>20+</h3>
                <p>instructors</p>
                </div>    
                <div>
                <h3>20+</h3>
                <p>instructors</p>
                </div>    
            </div>
        </div>
        <div className='part3'>
            <div className='part4'>
                <img src={hi} alt='h'/>
                <h2>Interactive learning</h2>
                <p className='how-syn'>At the Hakbod Vocational Centre you don’t learn from books. You will be offered the theory in a conducive learning environment. </p>
                
            </div>
            <div className='part5'>
            {content}
            </div>
        </div>
    </div>
  )
}

export default Why