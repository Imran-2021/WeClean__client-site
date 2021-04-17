import React from 'react';
import ExtraInfoCard from '../ExxtraInfoCard/ExtraInfoCard';

const extrainfo = [
    {
        title: 'Floor Cleaning',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/09/icon1.png",
    
    },
    {
        title: 'Window Cleaning',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/09/icon2.png",
    
    },
    {
        title: 'Laundry',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/09/icon3.png",
    
    },
    {
        title: 'Trash Treatment',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/09/icon4.png",
    
    },
    {
        title: 'Extra Shiny',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/11/icon5.png",
    },
    {
        title: 'Cloth Ironing',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/11/icon6.png",
    
    }
]
const ExtraFeture = () => {
    return (
    <section className=" container"  style={{height:"500px", backgroundColor:"#ddd"}} >
            <h2 className="text-center pt-3">We provide best solutions for a Clean Environment.</h2>
            <div className="d-flex justify-content-center">

                <div className="w-75 row d-flex align-items-center">
                    {
                        extrainfo.map(info => <ExtraInfoCard info={info} key={info.title}/>)
                    }
                </div> 
            </div>
        </section>
    );
};

export default ExtraFeture;