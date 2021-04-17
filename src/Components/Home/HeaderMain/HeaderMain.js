import React from 'react';


const HeaderMain = () => {
    return (
        <main style={{height:'700px'}} className=" container row d-flex align-items-center">
            <div className="col-md-5 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Cleaning?<br/>'Tired' of all these...</h1>
                <img src="https://dtweclean.wpengine.com/wp-content/uploads/layerslider/Cleaning-Slider/line.png" alt=""/>
                <div className="text-secondary">
                <p>
                We are here to help you make an
                We provide best solutions for a Clean Environment.
                If you need any help in cleaning or maintenance.
                </p>
                <p>
                We help clean all your needs with our various
                Skills & Range of Services.
                </p>
                <p>

                Leave it to the Best
                The Best Elegant Cleaning Template around. Get your
                copy now and enjoy the features.
                </p>    

                </div>
                <button className="btn btn-primary">Coll Us</button> <span style={{fontWeight:"bold"}}>or</span> <button className="btn btn-primary">Hire Us</button>
            </div>
            <div className="col-md-5 offset-md-1">
                <img style={{height:"600px"}} src="https://dtweclean.wpengine.com/wp-content/uploads/layerslider/Cleaning-Slider/cleaning-woman.png" alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;