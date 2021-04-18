import React from 'react';
import "./Reviews.css"
const Review = ({info}) => {
    return (
        <div  className=" col-md-3 text-center  m-5 ">
            {/* <div style={{height:"40vh",overflow:"hidden"}}> 

                <img style={{width:"35%",height:"35%",borderRadius:"50%",border:'1px solid red'}} src={info.image} alt=""/>
                <h5>{info.name}</h5>
                <p style={{textAlign:"left"}}>{info.review}</p>
            </div> */}
            <div className="containerr">
                <div className="boxx">
                    <div className="icon">
                    <img style={{width:"35%",height:"35%",borderRadius:"50%",border:'1px solid red'}} src={info.image} alt=""/>
                    </div>
                    <div className="content">
                    <h5>{info.name}</h5>
                    <p style={{textAlign:"left"}}>{info.review}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Review;