import React from 'react';
import { useForm } from 'react-hook-form';

const Adminn = () => {
    const onSubmit = data => {
        alert("sussessfully submit.")
        const eventData = {
            email: data.email,
        }
        fetch('https://fast-waters-50007.herokuapp.com/addAdmin',{
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
            <div id="submit" >
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                <input  style={{width:'500px',padding:'10px',marginTop:'2px'}} name="email" defaultValue="email" ref={register}  /> <br/>   
                <input className="btn btn-success mt-3" type="submit" />
                </form> 
                </div>
                
            </div>
        </div>
    );
};

export default Adminn;