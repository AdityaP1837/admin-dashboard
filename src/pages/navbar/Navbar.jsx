import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/assets/logo.svg" alt="Logo" />
        <span>Admin Dashboard</span>
      </div>
      <div className="user">
        <img src="/assets/search.svg" alt="Search" />
        <img src="/assets/app.svg" alt="App" />
        <img src="/assets/expand.svg" alt="Expand" />
        <div className="notify">
          <img src="/assets/notifications.svg" alt="notify" />
          <span>1</span>
        </div>
        <div className="userData">
          <img src="/assets/noavatar.png" alt="" />
          <span>Bruce</span>
        </div>
        <img src="/assets/setting.svg" alt="Setting" />
      </div>
    </nav>
  )
}

export default Navbar
