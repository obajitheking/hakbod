import React from 'react'
import hak from '../../images/1.jpg'
import './header.css'


const Header = () => {
  return (
    <div className='container header_container'>
        <div className='wrap1'>
            <h1>Hakbod Vocational Centre</h1>
            <h3>take the next step!</h3>
            <p>Hakbod Vocational Centre provides the skills, knowledge and attitude neccesary for effective employment in both the culinary and fashion industries. We aim to be the number 1 sought out vocational school in Lagos
            </p>
            <a href="www.google.com" className="btn-log">View Our Courses</a>
        </div>
        <div className='drop'>
            <img src={hak} alt='hak' className='geta' />
        </div>
    </div>
  )
}

export default Header