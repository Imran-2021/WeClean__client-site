import React from 'react';
import ExtraFeture from '../ExtraFeture/ExtraFeture';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import "./Home.css"

const Home = () => {
    return (
        <div >
           <Header/>
           <Services/>
           <br/>
           <ExtraFeture/>
           <br/>
           <Reviews/>
           <br/>
           <Footer/>
          
        </div>
    );
};

export default Home;