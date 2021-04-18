import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const Admin = () => {
   
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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

    return (
        <div>
            
            {
                adminE?<li>this is admin</li>:<p>this is not</p>
            }
                  
        </div>
    );
};

export default Admin;