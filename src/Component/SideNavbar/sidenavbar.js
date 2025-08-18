import React from 'react'
import './sideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
const SideNavebar = () => {
    return (
        <div className="home-sideNavbar">
            <div className="home_sideNavbarTop">
                <HomeIcon />
                <div className={`home_sideNavbarTopOption`}>Home</div>
            </div>
        </div>
    )
}

export default SideNavebar