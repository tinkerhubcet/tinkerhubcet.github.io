import React from 'react';
import {Link} from 'react-router-dom'


function NavBar(){
    return(
        <div className="navbar-main navbar navbar-expand-lg navbar-light ">
            <button className="navbar-toggler" style={{border:0}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-menu-button" viewBox="0 0 16 16">
                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-8z"/>
                    <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <div className="collapse navbar-collapse nav-bg" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto">
                    <div className="nav-item active nav-home" >
                        <Link to='/' className='nav-link no-underline' >Home<hr/></Link>
                    </div>
                    <div className="nav-item nav-it nav-abt">
                        <Link to='/about' className='nav-link no-underline'>About</Link>
                    </div>
                    <div className="nav-item nav-it nav-eve">
                        <Link to='/eventDetails/Townhall' className='nav-link no-underline'>Events</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default NavBar;