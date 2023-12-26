import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Main 
