import React, { useState } from 'react';
// import BannerImg from '../../img/GeneralLandinPage_Banner.jpg';
// import Logo from '../../img/HJ-Logo.png';
import RegistrationForm from "../comman/registrationForm";
// commit

const Banner = () => {
    const [isOpen, setIsOpen] = useState(true);
    return(
    <div className="banner"
        // style={{ background: `url(${BannerImg})` }}
        style={{ background: `url(/img/GeneralLandinPage_Banner.jpg)` }}
        >
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-sm-6 col-xs-12">
                    <div className="banner-logo">
                        <a href='https://hjrealestates.com/'><img alt=""src={'/img/HJ-Logo.png'} /></a>
                    </div>
                    <div className="detail-box">
                        <h2>OFF-PLAN</h2>
                        <h3>PROPERTIES<br></br>
                            FOR SALE IN DUBAI<span className="dot"></span></h3>
                        <p>Now is the perfect time to Invest in Dubai Properties</p>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-6 col-xs-12">
                    <RegistrationForm />
                </div>
            </div>
        </div>
    </div >

);
};

export default Banner;