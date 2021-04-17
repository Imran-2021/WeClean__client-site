import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import Navbar from '../Home/Navbar/Navbar';

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);

    const history = useHistory();
   const location = useLocation();
   const { from } = location.state || { from: { pathname: "/" } };

if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app();
     }


    const [user,setUser]=useState({})
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn=()=>{
        firebase.auth().signInWithPopup(provider).then((result) => {
    const{displayName,email}= result.user;

    const singinUser ={
        name:displayName,
        email:email,
        photoURL:result.user.photoURL,
    }        
    // console.log(singinUser);
    setUser(singinUser)
    
    setLoggedInUser(singinUser)
    history.replace(from);
    // console.log(displayName,email,photoURL);

    })
    .catch((error) => {
    var errorMessage = error.message;
    console.log(errorMessage);
    });}
    return (
        <div>
            
        <div  style={{textAlign:'center',margin:'3%'}}>
            {
               loggedInUser.email?  <h4>Log in successfully</h4> :<button onClick={handleSignIn}  className="btn btn-primary">Log In with Google</button>
           }
        </div>
        </div>
    );
};

export default Login;