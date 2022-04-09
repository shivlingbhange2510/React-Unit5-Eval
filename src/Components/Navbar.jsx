import React from 'react'
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';
import { Employees } from './Employees';
import { Routes, Route, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to={'/'} >Home  </Link>
        <Link to={'/login'} > Login </Link>
        <Link to={'/register'} > Register </Link>
        <Link to={'/employee'} >Employees  </Link>

    </div>
  )
}
