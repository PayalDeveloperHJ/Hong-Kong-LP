import React, { useState } from 'react';
import Modal from 'react-modal';
import RegistrationFormPopup from "../comman/registrationFormPopup";
import WhyDamacData from '../../content/singapore.json';
import getBasePath from '../../utils/getBasePath';


const WhyUS = () => {
    const [isOpen, setIsOpen] = useState(false);
    const basePath = getBasePath();
    const onRequestClose = () => {
        setIsOpen(false);
    }
    return (
        <div className='container-fluid whyDamacSection' style={{ backgroundImage: 'url(/img/singapore/why-damacBgImg.jpg)' }}>
            <div className='container'>
                <div className='row align-cent bg-section'>
                    <div className='col-lg-5 col-sm-12 col-xs-12'>
                        <div className='whyus_text'>
                            <h3>{WhyDamacData?.whyDamacInfo?.title}</h3>
                            <p>{WhyDamacData?.whyDamacInfo?.decri}</p>
                            <span>{WhyDamacData?.whyDamacInfo?.asof}</span>
                        </div>
                    </div>
                    {/* <div className='col-lg-1'></div> */}
                    <div className='col-lg-7 col-sm-12 col-xs-12'>
                        <div className='damac-logo-list'>
                            <img src={`${basePath}/${WhyDamacData?.whyDamacInfo?.damaclogo}`} alt='' />
                        </div>
                        <div className='row'>
                            {WhyDamacData?.whyDamacInfo?.list?.map((item, index) => {
                                return (
                                    <div className='col-lg-6 col-sm-6 col-6 pb-30 mob-align' key={index}>
                                        <div className='row align-cent'>
                                            <div className='col-lg-3 col-sm-3 col-5 mob-ped'>
                                                <div className='damac_logo'>
                                                    <img src={`${basePath}/${item?.icon}`} alt='' />
                                                </div>
                                            </div>
                                            <div className='col-lg-9 col-sm-9 col-7'>
                                                <div className='damac-text'>
                                                    <h3>{item?.counter}</h3>
                                                    <p>{item?.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="reg_btn">
                        <button onClick={() => setIsOpen(true)}>Register your interest</button>
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
                    <RegistrationFormPopup />
                </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WhyUS;