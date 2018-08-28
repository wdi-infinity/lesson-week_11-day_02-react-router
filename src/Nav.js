import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => (
  <header>
    <h1>MyMDB</h1>
    <Link to='/'>Home</Link>
    <Link to='/movies'>Movies</Link>
    <hr />
  </header>
)

export default Nav
