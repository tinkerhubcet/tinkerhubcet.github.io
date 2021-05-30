import React from 'react';
import Test from './Test';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";



function EventDetails(){

    return (
          <div className="eve-head-main">
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <h2 className="event-title">Events</h2>
              <Link to="/" style={{color:"#000",margin:25}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
              </Link>
            </div>
         

            <Router>
              	
        
              	<ul className="eve-ul">
					<li style={{backgroundColor:"#DF5042"}}>
					<Link to="/eventDetails/Townhall" className="eve-link" >Townhall</Link>
					</li>
					<li style={{backgroundColor:"#F7B829"}}>
					<Link to="/eventDetails/DevOps" className="eve-link">DevOps</Link>
					</li>
					<li style={{backgroundColor:"#7bb5f1"}}>
					<Link to="/eventDetails/Hackathon" className="eve-link">Hackathon</Link>
					</li>
                </ul>
      
              	<Switch>
                	<Route path="/eventDetails/:id" children={<Test />} />
              	</Switch>

            </Router>
        </div>
        
    );
}


export default EventDetails;