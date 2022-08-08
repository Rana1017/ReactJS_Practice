import React from 'react'

const Navbar = () => {
  return (
    <nav className='navSection'>
      <div className='logo'>
           <a href='/'>Logo</a>
      </div>
      <ul className='navbar-menus'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <a href='/'>Contact</a>
        </li>
        <li>
          <a href='/signin'>Sign Up</a>
        </li>         
    </ul>
  </nav>
  )
}

export default Navbar