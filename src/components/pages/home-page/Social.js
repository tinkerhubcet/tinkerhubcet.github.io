import React from 'react';
import {FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa'


function Social(){
    return (
        <div className="social-main">
            <div><a href="https://www.linkedin.com/groups/13914799" target="_blank" rel="noreferrer">
                <FaLinkedin size={35}/></a>
            </div>
            <div><a href="https://instagram.com/tinkerhubcet?igshid=1gkhqvml39wj3" target="_blank" rel="noreferrer">
                <FaInstagram  size={35}/>
                </a>
            </div>
            <div><a href="https://twitter.com/TinkerhubC" target="_blank" rel="noreferrer">
                <FaTwitter  size={35}/></a></div>
        </div>
    );
}


export default Social;