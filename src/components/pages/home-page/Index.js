
import React from 'react';
import Contact from './Contact';
import CopyRight from './CopyRight';
// import Events from './Events';
import Goals from './Goals';
import Home from './Home';
import Initiative from './Initiative';
import Learn from './Learn';
import Social from './Social';

function Index(){
    return (
        <div className="index-main" >
            <Home/>
            <Goals/>
            <Initiative/>
            {/* <Events/> */}
            <Learn/>
            <Contact/>
            <CopyRight/>
            <Social/>
        </div>
    );
}


export default Index;