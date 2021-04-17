import React, {  useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Dashboard = () => {
    const [loggedInUser]=useContext(UserContext);
        const {abc}=useParams();
        console.log(abc);
        const [data,setDataa] =useState([])
        
        useEffect(()=>{
            fetch('https://fast-waters-50007.herokuapp.com/services')
            .then(res=>res.json())
            .then(data=>setDataa(data))    
        },[])
          const find= data.find(bk=>bk._id===abc)
          console.log(find?.cost);
        
          const handleSelectedService=()=>{
            document.getElementById('success').style.display='block'
            document.getElementById('hideIt').style.display='none'
          const details ={
            userName :loggedInUser.name,
            userEmail : loggedInUser.email,
            service:find?.name,
            cost:find?.cost,
            Date:today
            }    

            fetch('https://fast-waters-50007.herokuapp.com/selectedServices',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(details)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        }
                    var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            console.log(today);
    return (
        <div>
            
            <div   className="container mt-5">
                <h3>Hi, {loggedInUser.name}</h3>
                <p>stay with us for your better clean home !! <span className="ml-5 fs-5  mt-3">-- <Link to="/home">Other Services</Link></span></p>
            <div id="hideIt" className="p-5">
                <div className="row p-2">
                    <div style={{ backgroundColor:"#E8E5D4",borderRight:"1px solid green"}} className="col-md-6">
                    <div >
                <h2 style={{color: '#1CC7C1'}} className="mt-3 mb-3 ">{find?.name}</h2>
                <hr/>
                <h4>{find?.cost}</h4>
                <small>{find?.duration}</small>
                <p>{find?.info}</p>
                </div>
                    <div className=" container row d-flex align-items-center">
                    <button onClick={handleSelectedService} className="btn btn-dark w-50 mt-4">Hire Us</button>
                </div>
                </div>
                <div style={{paddingLeft:"0"}} className="col-md-4">
                    <img  src="https://image.freepik.com/free-vector/cleaners-with-cleaning-products-housekeeping-service_18591-52055.jpg" alt=""/>
                </div>
                
                </div>
            </div>
            <div className="container text-secondary" id="success" style={{display:'none'}}>
                    <h3>Hi, <span className="text-info">{loggedInUser.name}</span></h3>
                    <hr/>
                    <h4>Your selected Book - <span className="text-info">{find?.name}</span> </h4>
                    <hr/>
                    <h4>Price: <span className="text-info"> {find?.cost}</span></h4>
                    <hr/>
                    <h4>Date : <span className="text-info">{today}</span> </h4>
                    <hr/>
                    <h3 className="text-secondary"> successfully Hired, Thank you !</h3>
                    <h6><Link className="btn btn-success" to="/user">Go your profile</Link> </h6>
            </div>
            </div>
            </div>
    );
};

export default Dashboard;