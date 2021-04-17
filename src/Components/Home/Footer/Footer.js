import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
<footer className="bg-dark text-white pt-5 pb-4">
    <div className="container text-md-left">
        <div className="row text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">company name</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima labore, impedit debitis sit saepe error at inventore, modi tempore voluptate adipisci tempora, laborum eum expedita ducimus. Amet, ex vel?</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Services</h5>
                <p><Link to="#" className="text-white" style={{textDecoration:"none"}}>The Providers</Link>
                </p>
                <p><Link to="#" className="text-white" style={{textDecoration:"none"}}>Creativity</Link>
                </p>
                <p><Link to="#" className="text-white" style={{textDecoration:"none"}}>SourceFiles</Link>
                </p>
                <p><Link to="#" className="text-white" style={{textDecoration:"none"}}>Bootstrap 5 alpha </Link>
                </p>
                
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Usefull Links</h5>
                <p><Link to="#" className="text-white" style={{textDecoration:"none"}}>Your accounts</Link>
                </p>
                <p><Link to="#" className="text-white" style={{textDecoration:"none"}}>becames a affiliates</Link>
                </p>
                <p><Link to="#" className="text-white" style={{textDecoration:"none"}}>Shipping rates</Link>
                </p>
                <p><Link to="#" className="text-white" style={{textDecoration:"none"}}>Help Line</Link>
                </p>
                
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"> New Yark,NY 2333,us</i></p>
            <p><i className="fas fa-envelope mr-3"> mdimranulhaque.asdf@gmail.com</i></p>
            <p><i className="fas fa-phone mr-3"> +92 3562757865</i></p>
            <p><i className="fas fa-print mr-3"> +01 4528896643</i></p>
        
        </div>
        </div>
        <hr className="mb-4"/>
        <div className="row align-items-center ">
            <div className="col-md-7 col-lg-8">
                <p className="ms-5"> &copy; Copyright {new Date().getFullYear()} All right reserved by:-
                    <Link to="#" style={{textDecoration:"none"}}>
                        <strong className="text-warning"> We Clean</strong>
                    </Link>
                </p>
            </div>
        </div>
    </div>
</footer>
        </div>
    );
};

export default Footer;