import React from 'react';
import { Link } from 'react-router-dom';
const Info = () => {
    return (
        <div>
            <div className="text-center container mb-5">
                <h1 className="mt-5">THE BEST TEAM IS HERE IN YOUR CITY</h1>
                <p className="mt-3 mb-4 text-secondary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>
                <Link style={{padding:"10px" , border:"1px solid red",textDecoration:"none",borderRadius:"3px" , marginTop:"5px"}}  to="#">Request for a Quote</Link>
            </div>
            <div style={{height:"700px"}} className="container offset-md-1 d-flex align-items-center">
                <div className="row">
                    <div className="col-md-6">
                        <img style={{width:"100%"}} src="https://dtweclean.wpengine.com/wp-content/uploads/2015/11/cleaning-service.png" alt=""/>
                    </div>
                    <div className="col-md-4 mt-3 offset-md-2">
                        <h2>Get Satisfied with the services <br/> we provide A to Z in Cleaning</h2>
                        <p>1.Upholsery Cleaning</p>
                        <p>2.Apartment Cleaning</p>
                        <p>3.Move In/Move Out Cleaning</p>
                        <p>4.Commercial Cleaning</p>
                        <p>5.Window Washing</p>
                        <p>6.Construction Clean-Up</p>
                        <p>7.Office Cleaning</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;