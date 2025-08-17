import React from 'react'
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Navbar = () => {
    return (
        <div className='navbar'>

            <div className="navbar-left">
                <div className="navbarHamberger">
                    <MenuIcon sx={{color:"white"}}/>
                </div>
                <div className="navbar_youtubeImg">
                    <YouTubeIcon sx={{ fontSize: "34px"}} className='navbar_youtubeImage' />
                    <div className='navbar_utubeTitle'>YouTube</div>
                </div>
            </div>
            <div className="navbar-middel">
                <div className="navbar_searchBox">
                    <input type= 'text' placeholder='Search' className='navbar_searchBoxInput' />
                     <div className="navbar_searchIconBox"><SearchIcon sx={{ fontsize: "28px", color:"white" }} /></div>
                </div>
                
            </div>

        </div>
    )
}

export default Navbar