import React from 'react'
import './sideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
const SideNavebar = () => {
    return (
        <div className="home-sideNavbar">
            <div className="home_sideNavbarTop">
                    <div className={`home_sideNavbarTopOption`}>
                    <HomeIcon />
                    <div className="home_sideNavbarTopOptionTitle">Home</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <VideoCallIcon />
                    <div className="home_sideNavbarTopOptionTitle">Shorts</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    < SubscriptionsIcon />
                    <div className="home_sideNavbarTopOptionTitle">Subscriptions</div>
                </div>
            </div>
        </div>
    )
}

export default SideNavebar 