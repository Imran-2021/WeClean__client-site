import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Sidebar.css"
const Admin = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const onSubmit = data => {
        alert('successfully submit')
        const eventData = {
            name: data.name,
            cost : data.price,
            duration:data.duration,
            info:data.info,
        }

        fetch('https://fast-waters-50007.herokuapp.com/addServices',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(eventData)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })


        console.log(eventData)
    }
    const { register, handleSubmit } = useForm();
    return (
        <div>
            <div className="body">
            {/* vertical nav */}
            <div className="vertical-nav bg-white" id="sidebar">
                <div className="py-4 px-4 mb-4 bg-light">
                    <div className="media d-flex align-items-center ">
                        <img src={loggedInUser.photoURL} alt="" width="80" height="80" className="mr-3 rounded-circle img-thumbnail shadow-sm"   />
                        <div className="media-body">
                            <h4 className="m-0">{loggedInUser.name}</h4>
                            <p className="font-weight-normal text-muted mb-0">web developer</p>
                        </div>
                    </div>
                </div>
                <p className="text=gray font-weight-bold text-uppercase px-4 small pb-4 mb-0 ">Dashboard</p>
                <ul className="nav flex-column bg-white mb-0 ">
                    <li className="nav-item">
                        <Link className="nav-link bg-dark text-light">Admins</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link bg-dark text-light">addNewService</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link bg-dark text-light">All Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link bg-dark text-light">Update Services</Link>
                    </li>

                </ul>
            </div>
            <div className="page-content p-5 " id="content">
                    <div className="separator"></div>
                    <div className="row text-white">
                        <div className="col-lg-7">
                        <div id="submit" style={{textAlign:"center"}}>
                        <h3>Add New Services..</h3>
                        <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input style={{width:'400px',padding:'10px'}} name="name" defaultValue="Service name" ref={register} /> <br/> 

                        <input style={{width:'400px',padding:'10px',marginTop:'2px'}} name="price" defaultValue="cost" ref={register} /> <br/>

                        <input style={{width:'400px',padding:'10px'}} name="duration" defaultValue="duration" ref={register} /> <br/> 

                        <input style={{width:'400px',padding:'10px'}} name="info" defaultValue="info" ref={register} /> <br/> 
                        
                        <input className="btn btn-success mt-3" type="submit" />
                        </form> 
                        </div>
                
                    </div>
                        </div>
                        <div className="col-lg-5">
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio soluta rerum, doloribus mollitia reiciendis maiores unde voluptatibus dolorum autem corporis doloremque eligendi sequi quasi commodi aliquid, vel impedit nihil laborum.</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio soluta rerum, doloribus mollitia reiciendis maiores unde voluptatibus dolorum autem corporis doloremque eligendi sequi quasi commodi aliquid, vel impedit nihil laborum.</p>
                        </div>
                    </div>
            </div>
        </div>
            
        </div>
    );
};

export default Admin;