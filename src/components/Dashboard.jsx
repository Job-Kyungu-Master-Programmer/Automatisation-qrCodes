import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo-white.svg'
import QrCode2Icon from '@mui/icons-material/QrCode2';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container dashboard__container">
        <div className="dashboard__top">
          <img
            src={logo}
            alt="logo Bauzar-Smart"
            className="dashboard__logo" />
        </div>
        <ul className="dashboard__list">
          <NavLink to='/' className="dashboard__item">
            <QrCode2Icon className='dashboard__icon' />
            <span>
              Creation QR-Code
            </span>
          </NavLink>
          <NavLink to='/qrcode' className="dashboard__item">
            <FormatListBulletedIcon className='dashboard__icon' />
            <span>
              QR-Codes
            </span>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
