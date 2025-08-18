import React from 'react'
import SideNavbar from '../../Component/SideNavbar/sidenavbar'
import HomePage from '../../Component/Homepage/homepage'
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