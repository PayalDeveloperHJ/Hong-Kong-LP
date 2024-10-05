import React, { useState } from 'react';
import Modal from 'react-modal';
import RegistrationFormPopup from "../comman/registrationFormPopup";
import getBasePath from '../../utils/getBasePath';


const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const basePath = getBasePath();
    const hjLogo = `${basePath}/img/singapore/HJLogo.svg`;

    const onRequestClose = () => {
        setIsOpen(false);
    }
    return (
        <div className="singapore_banner"
            style={{ background: `url(${basePath}/img/singapore/Banner.jpg)` }}
        >
            <div className="container">
                <div className="row align-cent">
                    <div className="col-6 col-sm-6">
                        <div className="banner-logo">
                            <a href='https://hjrealestates.com/'><img alt="" src={hjLogo} /></a>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6">
                        <div className="dev-logo">
                            <a href='#'><img alt="" src={`${basePath}/img/singapore/damac-logo.png`} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner_text'>
                <h2>Unlock Premier Property<br></br>
                    Investments in Dubai</h2>
            </div>
            <div className='banner_list'>
                <p>Zero Tax | 8-12% ROI | Free Consultationx</p>
            </div>
            <div className="reg_btn mt-50">
                <button onClick={() => setIsOpen(true)}>Register Now</button>
                <Modal
                    isOpen={isOpen}
                    className="RegistrationFormModel"
                    onRequestClose={onRequestClose}
                    contentLabel="Registration Modal"
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <button className="close-button" onClick={onRequestClose}>X</button>
                    <RegistrationFormPopup onSuccess={onRequestClose} />
                </Modal>
            </div>
        </div >

    );
};

export default Banner;