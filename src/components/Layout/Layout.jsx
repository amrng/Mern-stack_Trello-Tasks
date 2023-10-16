
import React from 'react'
// eslint-disable-next-line no-unused-vars
import style from "./Layout.css"
import { Offline } from "react-detect-offline";
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'


export default function Layout() {

  return (
    <>
      <Navbar />
      <Offline>
        <div className='network w-25 p-4 text-danger d-flex flex-column align-items-center justify-content-center '>
          <i className="fa-solid fa-triangle-exclamation fa-2xl fa-fade mb-4"></i>
          <h4 className='d-inline-block text-center'>Looks like you lost your connection. Please check it and try again.</h4>
        </div>
        </Offline>
      <Outlet/>
    </>
  )
}
