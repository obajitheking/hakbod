import React from 'react'

import svgg from '../images/svgg.jpg'
import {BsFacebook, BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'><img src={svgg}/></a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact Us</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com' target="_blank"><BsFacebook /></a>
        <a href='https://instagram.com' target="_blank"><BsInstagram /></a>
        <a href='https://twitter.com' target="_blank"><FaTwitter /></a>
        <a href='https://whatsapp.com' target="_blank"><BsWhatsapp /></a>

      </div>


      <div className='footer__copyright'>
        <small>&copy;Copyright 2020, Hakbod Vocational Centre. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer