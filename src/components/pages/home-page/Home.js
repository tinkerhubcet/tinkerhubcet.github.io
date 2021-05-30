import React from 'react';
import Navbar from "../../NavBar";
import './custom.css'
import logo from '../../images/tinkerhub-logo.png'
import team from '../../images/team.png';

function Home(){
    return (
        
            <div className="bg1">
                <div className="main-bg">
                </div>
                <div >
                    <div className="round-logo">
                        <img src={logo} alt="helo " className="logo"></img>
                    </div>
                    <div className="round-ppl"><img src={team} alt="helo2"></img></div>
                </div>
                <div className="nav-pos">
                    <Navbar/>
                </div>   
                
                <div className="home-title" style={{zIndex:1}}>
                    <h1>Tinker<span style={{color:"#000"}}>Hub CET</span></h1>
                    <div className="sub-name">
                        Official TinkerHub chapter of<br/>
                         College of Engineering, Trivandrum
                    </div>
                    
                    
                </div>
                
                <div className="home-content-qt">
                    “A Student Initiative, the key separator being<br/>
                    that it is a community for all, with absolutely<br/>
                    no barriers to entry.”
                </div>
                <a 
                    href="https://tinyurl.com/tinkerhubcet" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="join-btn">
                        Join Us
                </a>     
            </div>
           
            
    
      

        
    );
}

export default Home;