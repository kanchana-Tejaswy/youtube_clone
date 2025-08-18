import React from 'react'
import SideNavbar from '../../Component/SideNavbar/sidenavbar.js'
import HomePage from '../../Component/HomePage/HomePage.js'
import './home.css'
const Home = () => {
    return (
        <div className='home'>
            <SideNavbar/>
            <HomePage/>
        </div>
    )
}

export default Home