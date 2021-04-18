import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Admin from './Admin';
import Adminn from './Adminn/Adminn';
import DynamicReview from './DynamicReview';
import "./Sidebar.css"
import UserDetails from './UserDetails';

const User = () => {
    const [loggedInUser] = useContext(UserContext);
    const [selectedOrders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://fast-waters-50007.herokuapp.com/selectedService?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })

    }, [loggedInUser.email])
    const handlereview=()=>{
        document.getElementById("show_it").style.display="block"
        document.getElementById("order").style.display="none"
        document.getElementById("addservice").style.display="none"
    }
    const handleorder=()=>{
        document.getElementById("show_it").style.display="none"
        document.getElementById("order").style.display="block"
        document.getElementById("addadmin").style.display="none"
        document.getElementById("addservice").style.display="none"
    }



    //
    const [admin,setAdmin]=useState([]);
    useEffect(()=>{
        fetch('https://fast-waters-50007.herokuapp.com/admin')
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    },[])
    for (let i = 0; i < admin.length; i++) {
        const element = admin[i];
        if (element.email===loggedInUser.email) {
            var adminE= loggedInUser.email
        }
    }
    //

    const handleservices=()=>{
       
        document.getElementById("addservice").style.display="block"
        document.getElementById("order").style.display="none"
    }
    const handleadmin=()=>{
        document.getElementById("order").style.display="none"
        document.getElementById("addservice").style.display="none"
        document.getElementById("addadmin").style.display="block"
    }
    return (
        <div>
            <div className="body">
                {/* vertical nav */}
        <div className="vertical-nav bg-white" id="sidebar">
            <div className="py-4 px-4 mb-4 bg-light">
                <div className="media d-flex align-items-center ">
                    <img src={loggedInUser.photoURL} alt="" width="80" height="80" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
                    <div className="media-body">
                        <h4 className="m-0">{loggedInUser.name}</h4>
                        <p className="font-weight-normal text-muted mb-0">web developer</p>
                    </div>
                </div>
            </div>
            {
                adminE?<p className="text=gray font-weight-bold text-uppercase px-4 small pb-4 mb-0 ">Admin</p>:<p className="text=gray font-weight-bold text-uppercase px-4 small pb-4 mb-0 ">User</p>
            }
            <ul className="nav flex-column bg-white mb-0 ">
                {
                    adminE &&<li className="nav-item">
                    <Link onClick={handleservices} className="nav-link bg-dark text-light">add services</Link>
                    <Link onClick={handleadmin} className="nav-link bg-dark text-light">make admin</Link>
                    
                    
                    </li>
                
                }
                <li className="nav-item">
                    <Link onClick={handleorder} className="nav-link bg-dark text-light">your Ordered Service</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={handlereview} className="nav-link bg-dark text-light">give Us review</Link>
                </li>

            </ul>
        </div>
        <div className="page-content p-5 " id="content">
            <div className="separator"></div>
            <div className="row text-white">
                <div className="container mt-4">
                    <div className="row ">
                        <div id="order" className="col-md-6 mt-5 ">
                                   { selectedOrders.length?
                                        <ol>
                                        <table className="container" style={{ border: '1px solid red', padding: '50px' }}>
                                            <tr>
                                                <th colSpan='3' className='text-secondary' style={{ textAlign: 'center' }}><h4 className=" text-white">your selected services-<span >{selectedOrders.length}</span> </h4></th>
                                            </tr>
                                            <tr className="p-2" style={{ border: '1px solid red', padding: '50px' }}>
                                                <th className="p-1">your selected services</th>
                                                <th>cost</th>
                                                <th>Date</th>
                                            </tr>
                                            <tr>
                                                <td> {selectedOrders.map(data => <UserDetails data={data.service} />)}</td>
                                                <td> {selectedOrders.map(data => <UserDetails dataa={data.cost} />)}</td>
                                                <td> {selectedOrders.map(data => <UserDetails dataaa={data.Date} />)}</td>
                                            </tr>
        
                                        </table>
                                    </ol>:<div>
                                        <h3>you have no ordered services ?</h3>
                                        <h4>chose form <Link className="btn btn-dark" to="/home">Home Page</Link></h4>
                                    </div>
                                   }

                            
                        </div>
                        <div id="show_it" style={{display:"none"}}>

                        {
                            selectedOrders.length?
                                <div  className="col-md-6">
                                <DynamicReview />
                            </div>:<div>
                                <h3>for giving us an review you need to order atlest one services,thank you.</h3>
                                
                            </div>
                        }
                        </div>
                        <div id="addservice" style={{display:"none"}}>
                            <Admin/>
                        </div>
                        <div id="addadmin" style={{display:"none"}}>
                        <Adminn/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default User;