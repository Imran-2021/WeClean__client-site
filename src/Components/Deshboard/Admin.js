import React from 'react';
import { useForm } from "react-hook-form";
import "./Sidebar.css"
const Admin = () => {
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
                    </div>
            </div>
        </div>
            
        </div>
    );
};

export default Admin;