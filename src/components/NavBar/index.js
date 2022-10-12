import React from 'react'
import './Navbar.css'
import Search from '../Search'
import { Link } from 'react-router-dom';

function Nav({search}) {
  return (
    <nav>
      <Link className='navLogo' to='/'>YouPlayer</Link>
      <Search search={search}/>
      <div>
        <Link to="/login" className='nav__login'>Login</Link>
      </div>
    </nav>
  )
}

export default Nav
