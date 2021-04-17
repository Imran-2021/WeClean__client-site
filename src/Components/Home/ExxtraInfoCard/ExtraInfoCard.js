import React from 'react';
import "./ExtraInfoCard.css"

const ExtraInfoCard = ({info}) => {
    return (
        <div className="col-md-4  " >
        <div className="d-flex  info-container" >
            <div className="mr-3">
                <img className="info-icon" src={info.image} alt=""/>
            </div>
            <div>
                <h6>{info.title}</h6>
                <small>{info.description}</small>
            </div>
        </div>
    </div>
    );
};

export default ExtraInfoCard;