import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import "./Reviews.css"


const Reviews = () => {
    const [review,setReview]=useState([]);

    useEffect(()=>{
        fetch('https://fast-waters-50007.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <section className=" container styleofbody"  style={{height:"100%", backgroundColor:"#ddd"}} >
            <h2 className="text-center pt-3">-Testimonial-</h2>
            <div className="d-flex justify-content-center">

                <div className=" d-flex  row">
                    {
                        review.map(info => <Review info={info}/>)
                    }
                </div> 
            </div>
        </section>
    );
};

export default Reviews;