import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Sidebar.css"
const Sidebar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
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
                        <Link to="/home" className="nav-link bg-dark text-light">home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/home" className="nav-link bg-dark text-light">home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/home" className="nav-link bg-dark text-light">home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/home" className="nav-link bg-dark text-light">home</Link>
                    </li>

                </ul>
            </div>
            <div className="page-content p-5 " id="content">
                    <h2 className="display-4 text-white">this is imranul haque</h2>
                    <p className="lead text-white mb-0">build a fixed side bar using bootstrap ... yeahhhh</p>
                    <div className="separator"></div>
                    <div className="row text-white">
                        <div className="col-lg-7">
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio soluta rerum, doloribus mollitia reiciendis maiores unde voluptatibus dolorum autem corporis doloremque eligendi sequi quasi commodi aliquid, vel impedit nihil laborum.</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio soluta rerum, doloribus mollitia reiciendis maiores unde voluptatibus dolorum autem corporis doloremque eligendi sequi quasi commodi aliquid, vel impedit nihil laborum.</p>
                        </div>
                        <div className="col-lg-5">
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio soluta rerum, doloribus mollitia reiciendis maiores unde voluptatibus dolorum autem corporis doloremque eligendi sequi quasi commodi aliquid, vel impedit nihil laborum.</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio soluta rerum, doloribus mollitia reiciendis maiores unde voluptatibus dolorum autem corporis doloremque eligendi sequi quasi commodi aliquid, vel impedit nihil laborum.</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Sidebar;