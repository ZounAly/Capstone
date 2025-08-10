import React from 'react'
import Logo from '../../assets/icons/logo.svg';


export const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto py-10'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className="col">
            <a href='#'><img src={Logo} className='logo h-[clamp(40px,32.1053px+2.4671vw,70px)]' alt='Logo'/></a>
          </div>
          <div className='col mt-5'>
            <h4 className='widget secTitle mb-2.5'>Doormat Navigation</h4>
            <ul className='leadText'>
              <li><a href="#" className='hover:text-primary'>Home</a></li>
              <li><a href="#" className='hover:text-primary'>About</a></li>
              <li><a href="#" className='hover:text-primary'>Menu</a></li>
              <li><a href="#" className='hover:text-primary'>Reservation</a></li>
              <li><a href="#" className='hover:text-primary'>Order Online</a></li>
              <li><a href="#" className='hover:text-primary'>Login</a></li>
            </ul>
          </div>
          <div className='col mt-5'>
            <h4 className='widget secTitle mb-2.5'>Contact</h4>
            <ul className='leadText'>
              <li><a href="#" className='hover:text-primary'>Address</a></li>
              <li><a href="#" className='hover:text-primary'>Phone Number</a></li>
              <li><a href="#" className='hover:text-primary'>Email</a></li>
            </ul>
          </div>
          <div className='col mt-5'>
            <h4 className='widget secTitle mb-2.5'>Social Media Links</h4>
            <ul className='leadText'>
              <li><a href="#" className='hover:text-primary'>Facebook</a></li>
              <li><a href="#" className='hover:text-primary'>Twitter</a></li>
              <li><a href="#" className='hover:text-primary'>Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
