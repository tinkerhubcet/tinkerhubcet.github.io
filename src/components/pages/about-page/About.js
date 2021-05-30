import React from 'react';
import about from '../../images/aboutus.png'
import {teamData} from '../home-page/data'
import {Link} from 'react-router-dom'

function About(){
    return (
        <div className="about-main">
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div className="page-title">About Us</div>
                <Link to="/" style={{color:"#fff",margin:30}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
              </svg>
            </Link>
            </div>
            
            
            <div className="">
                <div className="row">
                    <div className="abt-vector col-xl-6 col-md-6">
                        <img  src={about} alt="hel8"></img>
                    </div>
                    
                    <div className="col-xl-6 col-md-6 abt-text">
                            The idea behind a community like TinkerHub is for students,
                            to get exposed to tech and resources and people, outside of the curriculum and to 
                            enhance interaction between multiple departments, with year of study no bar.
                            What one faces when stepping out of college is a world of competition 
                            and without a strong backing of the latest in everything, making a name 
                            for oneself will be hard. This also involves the acquisition of 
                            internships, authoring or research papers, seizing research
                            opportunities to the extent of patent filing. The key separator 
                            is that it is a community for all, with absolutely no barriers to entry. 
                    </div>
                </div>
            </div>
            <div  className="team-title">Team</div>
            <div className="team-container">
                
                <div className="row">
                {teamData.map((data,key) =>{
                    return(
                        <div className="t-box col-xl-3 col-md-4">
                            <div className="team-box">
                                <img
                                    src={data.img[Object.keys(data.img)[0]]}
                                    alt="hel8" 
                                    className="team-img">
                                </img>
                                <div className="team-mem">
                                    <div className="team-name">{data.name}</div>
                                    <div>{data.title}</div>
                                </div>
                            </div>   
                        </div>
                    )
                    
                })}
                    
                    
                </div>
            </div>
            
        </div>
    );
}


export default About;