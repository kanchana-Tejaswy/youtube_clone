import React from 'react'
import './sideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
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

            <div className="home_sideNavbarMiddle">
                <div className={`home_sideNavbarTopOption`}>
                    <div className="home_sideNavbarTopOptionTitle">You</div>
                    < ChevronRightIcon />
                    
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    < RecentActorsIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your Channel </div>
                </div>

            </div>
        </div>
    )
}

export default SideNavebar 