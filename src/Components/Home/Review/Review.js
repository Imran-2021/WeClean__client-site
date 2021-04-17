import React from 'react';

const Review = ({info}) => {
    return (
        <div  style={{border:"1px solid #000"}} className="row col-md-3 text-center  m-3 ">
            <div style={{height:"40vh",overflow:"hidden"}}> 
                <img style={{width:"35%",height:"35%",borderRadius:"50%",border:'1px solid red'}} src={info.image} alt=""/>
                <h5>{info.name}</h5>
                <p style={{textAlign:"left"}}>{info.review}</p>
            </div>
        </div>
    );
};

export default Review;