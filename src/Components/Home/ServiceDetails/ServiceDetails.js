import React from 'react';
import { Link } from 'react-router-dom';
import "./ServiceDetails.css"
const ServiceDetails = (props) => {
    const {name,cost,duration,_id,info}=props.service;
    return (
        <div  style={{border:"1px solid #000"}} className="col-md-3 styleofbodyy text-center m-3 ">
            <div >
                <h5 style={{color: '#1CC7C1'}} className="mt-3 mb-3 ">{name}</h5>
                
                <h4>{cost}</h4>
                <small>{duration}</small>
                <p style={{textAlign:"left",padding:"15px"}} >{info}</p>
                <Link to={`/dashboard/${_id}`}><button className="btn btn-success mb-3">Buy Service</button></Link>
            </div> 
        </div>
    );
};

export default ServiceDetails;