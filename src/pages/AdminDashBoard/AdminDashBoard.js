import React from 'react'

//components
import SideBar from '../../components/AdminDashBoard/SideBar/SideBar';

//react-router
import {Outlet} from "react-router-dom";

function AdminDashBoard() {
  return (
    <div>
      <SideBar />
      <Outlet/>
    </div>
  )
}

export default AdminDashBoard