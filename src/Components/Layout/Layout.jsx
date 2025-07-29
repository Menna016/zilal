import React from 'react'
import Footer2 from '../Footer/Footer2'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/navbar'
import Logo from '../Logo/Logo'

export default function Layout() {
  return (
    <div>
    <Navbar/>
    <div className=""><Outlet/></div>
    <Footer2/>
    </div>
  )
}
