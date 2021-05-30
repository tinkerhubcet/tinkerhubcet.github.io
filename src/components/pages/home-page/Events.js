import React from 'react';
import {eventData} from './data';
import p1 from '../../images/p1.jpg';

function Events(){
    return (
        <div className="events-main">
            <div className="page-title" >Events</div>
            {/* <img src={p2} alt="p2" className="event"></img> */}
            <div className="init-box car-width" >
                <div className="" >
                    <div id="carouselExampleControls" class="carousel slide carou-col " data-ride="carousel" >
                        <div className="caro-arrow">
                            <a class="car-a" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                
                            </a>
                        </div>

                        <div class="carousel-inner car-inn">
                            <div className="container">
                                {eventData.map((data,key) => {
                                    return(
                                        <div class="carousel-item  car-box" key={key}>
                                            
                                                <div className="row" style={{padding:0}}>
                                                    <div className="col-xl-4 col-md-6">
                                                        <div className="date">
                                                            <img src={data.img[Object.keys(data.img)[0]]} 
                                                                className="poster">
                                                            </img>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                                                </svg>:{data.date}<br/>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                                                </svg>:{data.time}
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="col-xl-8 col-md-6 dis-non">
                                                        <h4 className="font-weight-bold">{data.title}</h4>
                                                        <div className="d-block w-100">
                                                            {data.desc}
                                                        </div>
                                                    </div>
                                                

                                            </div>
                                            
                                    {/* <img class="d-block w-100" src="..." alt="First slide"></img> */}
                                </div>
                                    )
                                })}
                                <div class="carousel-item active car-box" >
                                   
                                        <div className="row">
                                            <div className="col-xl-4 col-md-6">
                                                <div className="date">
                                                    <img src={p1} alt="p1" className="poster"></img>
                                                    <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                                                    </svg>:08 May 2021<br/>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                                                    </svg>:07:00PM
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-8 col-md-6 dis-non">
                                                <h4 className="font-weight-bold">Tech Bites</h4>
                                                <div className="d-block w-100">
                                                    Being a community driven platform, anyone 
                                                    from anywhere will be exposed to all the internship opportunities that are out there.
                                                    Organisations can use it as a platform to see the students in all 
                                                    their merit, and choose 
                                                    to reward those who they see worthy.Being a community driven platform, anyone 
                                                    from anywhere will be exposed to all the internship opportunities that are out there.
                                                    Organisations can use it as a platform to see the students in all 
                                                    their merit, and choose 
                                                    to reward those who they see worthy.
                                                </div>
                                            </div>
                                        
                                    </div>
                                            
                                    {/* <img class="d-block w-100" src="..." alt="First slide"></img> */}
                                </div>
                                
                            </div>
                            
                        </div>

                    
                        
                        <div  className="caro-arrow">
                            <a class="car-a" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Events;