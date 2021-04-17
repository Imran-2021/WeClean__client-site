import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <nav style={{backgroundColor:"rgb(60, 165, 29)"}} class="p-3 navbar navbar-expand-lg navbar-light ">
  <div class="container container-fluid">
    <img style={{height:"40px"}} src="https://dtweclean.wpengine.com/wp-content/themes/cleaning/images/logo@2x.png" alt=""/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-lg-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/home"><h4>Home</h4></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/about"><h4>About us</h4></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/admin"><h4>Admin</h4></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/user"><h4>userProfile</h4></Link>
        </li>
        {
          loggedInUser.email?<li class="nav-item">
          <Link class="nav-link active" onClick={()=>setLoggedInUser({})} to="/login"><h4>Log Out</h4></Link>
        </li>:<li class="nav-item">
          <Link class="nav-link active" to="/login"><h4>Log In</h4></Link>
        </li>
        }
        
        
      </ul>
    </div>
  </div>
    </nav>
    );
};

export default Navbar;