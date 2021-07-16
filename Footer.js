import React from "react";
import {Link} from "react-router-dom";

function Footer(){
    return(
        <footer >
            <div className="container-fluid text-center"  style={{background: "black"}}>
                <div className="py-5 " >
                    <h2 className="text-light " > Interested in working with me?</h2>
                    <Link to="/contact">
                        <button className="btn btn-outline-light btn-lg mt-3 " >
                             Let's talk
                        </button>
                    </Link>
                   
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info pb-3">More links</h5>
                    
                    <Link to="/" className="text-light d-block">Home</Link>
                    <Link to="/project" className="text-light d-block">Projects</Link>
                    <Link to="/blog" className="text-light d-block">Blogs</Link>
                    <Link to="/contact" className="text-light d-block">Contact me</Link>
                    <Link to="/write-recomentation" className="text-light">
                        Write a recommendation <i className="fas fa-heart text-light"></i>
                    </Link>
                    </div>
                     <div className="col-12 col-md-4 text-light text-justify py-3">
                        <p>
                        I am a freelance developer.this website describe my skills,projects 
                        and some activities.I include my contact details in this website.
                        Anyone intrested in work with me, then contact me.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 py-3">
                        <h5 className="text-info pb-3">Social</h5>
                        <a href="https://www.linkedin.com/in/maimoonath-arshana-m-a-33b149170">
                        <i className="fab fa-linkedin text-light h1 d-block"></i>
                        </a>
                        <a href="/">
                        <i className="fab fa-github text-light h1 d-block"></i>
                        </a>
                        <a href="/">
                        <i className="fas fa-envelope text-light h1 d-block"></i>
                        </a>
                    </div>
                </div>
                <div className="text-muted py-3">
                    <p>Copyright © maimoonath Arshana M A 2020</p>
                </div>
            </div>
         </footer>

    );
}
    export default Footer;