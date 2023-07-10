import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import TimelineIcon from '@mui/icons-material/Timeline';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const Sidebar = () => {

  const logoutUser= async ()=>{
    await axios.get('/user/logout')

   localStorage.removeItem('firstLogin')
   
    window.location.href= "/"
}


  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">RFL Best Buy Admin</span>
        </Link>
      </div>
      {/* <hr /> */}
      <ul className="nav">
        <Link to='/' className="nav-item">
          <DashboardIcon className="nav-icon"/>
          Dashboard</Link>
        <Link to='/products' className="nav-item">
          <ShoppingBasketIcon className="nav-icon"/>
          Products</Link>
        <Link to='/add_product' className="nav-item">
          <AddShoppingCartIcon className="nav-icon"/>
          Add Products</Link>
        {/* <Link to='/product_expiry' className="nav-item">
          <HourglassBottomIcon className="nav-icon"/>
          Product Expiry</Link> */}
        <Link to='/income' className="nav-item">
          <TimelineIcon className="nav-icon"/>
          Income</Link>
        <Link to='/expense' className="nav-item">
          <CallMissedOutgoingIcon className="nav-icon"/>
          Expense</Link>
        <Link to='/commission' className="nav-item">
          <AttachMoneyIcon className="nav-icon"/>
          Commission</Link>
        <Link to='/stuff' className="nav-item">
          <GroupIcon className="nav-icon"/>
          Stuff</Link>
        <Link to='/account' className="nav-item">
          <SettingsIcon className="nav-icon"/>
          Account</Link>
        <Link to='/' className="nav-item" onClick={logoutUser} >
          <LogoutIcon className="nav-icon"/>
          Logout</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
