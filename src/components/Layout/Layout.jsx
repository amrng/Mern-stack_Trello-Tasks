
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from "./Layout.css"
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'


export default function Layout() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
