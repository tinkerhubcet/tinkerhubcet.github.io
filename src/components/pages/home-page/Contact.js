import React from 'react';
import contact from '../../images/contact.png'


function Contact(){
    return (
        <div className="contact-main">
            <div className="page-title" >Contact Us</div>
            <div className="container-in">
                <div className="row">
                    <div className="col-xl-6 col-md-6">
                           <img src={contact} className="contact-img" alt="contact"></img>
                    </div>
                    <div className="col-xl-6 col-md-6 ">
                        <div className="msg-box">
                            <form action="https://formsubmit.co/tinkercet@gmail.com" method="POST">
                                {/* <label for="fname">Name</label> */}
                                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                                {/* <label for="email">Email id</label> */}
                                <input type="email" id="email" name="email" placeholder="Email id"></input>
                                <input type="text" id="subject" name="subject" placeholder="Subject"></input>

                                {/* <label for="subject">Subject</label> */}
                                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                                <input type="submit" value="Submit"></input>
                            </form>
                        </div>
                            
                    </div>
                </div>
            </div>
            

        </div>
    );
}

export default Contact;