import React from 'react'
import ' ./navbar.css';
import MenuIcon from 'https://mui.com/material-ui/react-menu/#LongMenu.js'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <div className=" navbarHamberger">
                    <MenuIcon sx={{colour:"white"}} />
                </div>
            </div>
        </div>
    )
}