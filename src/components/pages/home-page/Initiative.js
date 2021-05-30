import React from 'react';
import support from "../../images/support.png"
import {initData} from './data'
import "./custom.css";
import 'aos';
import Aos from 'aos';

function Initiative(){
    Aos.init();
    return (
        <div className="init-main">
            <div className="page-title" > Our Initiatives</div>
            <div className="init-box">
                <div className="container">
                        <div className="row">
                            <div className="col-xl-6  col-sm">
                                <div className="rect-box" data-aos={"fade-right"}>
                                    <h4 className="font-weight-bold">Setup Internships</h4>
                                    <div>
                                        Being a community driven platform, anyone 
                                        from anywhere will be exposed to all the internship opportunities that are out there.
                                        Organisations can use it as a platform to see the students in all 
                                        their merit, and choose 
                                        to reward those who they see worthy.
                                    </div>
                                </div>
                            </div>
                            <div className="init-img-box col-xl-6 col-sm">
                                <img src={support} alt="hel5"></img>
                            </div>
                            
                            {initData.map((data, key) => {
                                return(
                                    <div className="col-xl-4 col-md-6 col-sm-12" key={key} data-aos={"fade-right"}>
                                        <div className="rect-box">
                                            <h4 className="font-weight-bold">{data.title}</h4>
                                            <div>
                                            {data.desc}
                                            </div>
                                        </div>
                                    </div>
                                )
                                        
                                    })}
                            
                        </div>
                </div>
            </div>
            
        </div>
    );
}



export default Initiative;