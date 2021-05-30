import React from 'react';
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
import { useEffect, useState } from 'react';
import DevOps from './DevOps.md';
import Townhall from './Townhall.md';
import Hackathon from './Hackathon.md';


import {
    useParams
} from "react-router-dom";


function Test(){

    const [markDown, setMarkDown] = useState('');
    let { id } = useParams();
    console.log(id)

    useEffect(() => {
        if(id === "Hackathon"){
            fetch(Hackathon)
            .then((res) => res.text())
            .then((text) => setMarkDown(text));
        }

        else if(id === "Townhall"){
            fetch(Townhall)
            .then((res) => res.text())
            .then((text) => setMarkDown(text));
        }

        else if (id === "DevOps"){
            fetch(DevOps)
            .then((res) => res.text())
            .then((text) => setMarkDown(text));
        }
      });
    

    return (


        <div className="eve-main">

            <div className="container">
                <ReactMarkdown remarkPlugins={[gfm]} children={markDown} />
            </div>        
        </div>
    );
}


export default Test;