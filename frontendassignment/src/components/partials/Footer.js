import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='icons'>
        <Link className='icon'><i className="fa-brands fa-facebook-f"></i></Link>
        <Link className='icon'><i className="fa-brands fa-instagram"></i></Link>
        <Link className='icon'><i className="fa-brands fa-twitter"></i></Link>
        <Link className='icon'><i className="fa-brands fa-google"></i></Link>
        <Link className='icon'><i className="fa-brands fa-linkedin"></i></Link>
      </div>
      <div className='copyrights'>© 2023 Fixxo. All Rights Reserved</div>
    </footer>
  )
}

export default Footer