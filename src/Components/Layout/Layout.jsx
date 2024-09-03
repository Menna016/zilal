import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
       <Navbar/>
     <div className="">  <Outlet /></div>
      <Footer/>
    </div>
  )
}
