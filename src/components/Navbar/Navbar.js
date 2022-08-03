import React from 'react';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
        <div className='navBar'>
             <div className='navBar-Company'>
             <a href='/' className='company-name'>
                 Chiya Mahal          
             </a>
             </div>
         <ul className='navBar-menus'>
            <li>
                <a href='/'>Home</a>              
            </li> 

            <li>
                <a href='/'>Gallery</a>
            </li>

            <li>
                <a href='/'>About Us</a>
            </li>

            <li>
                <a href='/'>Contact</a>
            </li>

          </ul>
        </div>
    </nav>
  )
}

export default Navbar;