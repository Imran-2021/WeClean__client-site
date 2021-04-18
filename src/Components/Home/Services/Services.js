import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import "../ServiceDetails/ServiceDetails.css"
const Services = () => {

    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch('https://fast-waters-50007.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container styleofbod pb-5" style={{height:"100%",}}>
            <div className="text-center ">
                <h5 className=" pt-5 " style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide...</h2>
            </div>
            <div className="">
                <div className="d-flex justify-content-center row mt-5 pb-3">
                    {
                        services.map(service => < ServiceDetails service={service} key={service.name}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;