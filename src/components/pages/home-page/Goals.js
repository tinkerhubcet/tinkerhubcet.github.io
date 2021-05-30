import React from 'react';
import social from '../../images/social2.png'
import Aos from 'aos';

function Goals(){
    Aos.init();

    return (
        <div className="goal-main">
            <div className="page-title" >Goals</div>
            <div className="container box-container">
                <div className="row">
                    <div className="col-xl-6 col-md-6" data-aos={"fade-right"}>
                        <div className="goal-box">
                            <div className="number">1</div>
                                <div>
                                    <div>Focus on Community:​ To bring about a peer to peer 
                                        learning culture in the campus, 
                                        which unfortunately doesn’t exist at the moment.
                                    </div>
                                    <div className="under-line"></div>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        
                    </div>
                    <div className="col-xl-6 col-md-6" >
                        
                    </div>
                    
                    <div className="col-xl-6 col-md-6" data-aos={"fade-left"}>
                        <div className="goal-box">
                        <div className="number">2</div>
                                <div className="box-size">
                               
                                    <div className="text-wrap">Community driven Activities:Focus on 
                                        spreading opportunities to the right set of people,
                                        we witness opportunities being publicised, but not 
                                        always does it reach its target audience.
                                    </div>
                                    <div className="under-line"></div>
                                </div>
                                
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6" data-aos={"fade-right"}>
                        <div className="goal-box">
                            <div className="number">3</div>
                                <div className="box-size">
                                    <div className="text-wrap">Community driven Activities:Focus on 
                                        spreading opportunities to the right set of people,
                                        we witness opportunities being publicised, but not 
                                        always does it reach its target audience.
                                    </div>
                                    <div className="under-line"></div>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <div className="goal-vector">
                            <img  src={social} alt="hel3"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Goals;