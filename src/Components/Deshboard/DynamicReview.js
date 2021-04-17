import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
const DynamicReview = () => {
    const [loggedInUser]=useContext(UserContext);
    const onSubmit = data => {
        alert('successfully submit')
        const eventDataa = {
            name: data.name,
            review:data.review,
            image:loggedInUser.photoURL,
        }
        fetch('https://fast-waters-50007.herokuapp.com/addReviews',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(eventDataa)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

        console.log(eventDataa)
    }
    const { register, handleSubmit } = useForm();
    return (
        <div>
            <div id="submit" style={{textAlign:"center"}}>
                <h3>Please give us a review </h3>
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                <input  style={{width:'500px',padding:'10px',marginTop:'2px'}} name="name" defaultValue={loggedInUser.name} ref={register} readonly="readonly" /> <br/>

                <input style={{width:'500px',padding:'10px',height:"100px"}} name="review" defaultValue="write your review here" ref={register} /> <br/> 
                
                <input className="btn btn-success mt-3" type="submit" />
                </form> 
                </div>
                
            </div>
        </div>
    );
};

export default DynamicReview;