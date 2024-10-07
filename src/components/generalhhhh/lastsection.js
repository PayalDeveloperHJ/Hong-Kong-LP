import React, { useState } from 'react';
// import Footerbottom from '../../img/FooterBanner.jpg';
import RegistrationForm from "../comman/registrationForm";


const LastSection = () => (
    <div className="banner"
        style={{ background: `url(${'/img/FooterBanner.jpg'})` }}
        >
        <div className="container">
            <div className="row align-cent">
                <div className="col-lg-5 col-sm-6 col-xs-12">
                    <div className="footer-detail-box">
                        <h3>If you're seeking off-plan properties in Dubai for investment or personal purchase, reach out to our real estate investment experts.</h3>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-6 col-xs-12">
                    <RegistrationForm />
                </div>
            </div>
        </div>
    </div >

);

export default LastSection;