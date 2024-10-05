import React, { useState } from 'react';
import Modal from 'react-modal';
import getBasePath from '../../utils/getBasePath';
import propertyData from "../../content/singapore.json"; 
import RegistrationFormPopup from "../comman/registrationFormPopup";

Modal.setAppElement('#root');

const PropertyList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const basePath = getBasePath();
    const onRequestClose = () => {
        setIsOpen(false);
    }
    return (
        <div className="container-fluid bg-gray pb-100 po-re">
            <div className="container">
                <div className="row">
                    <div className="second_row_section align-cent">
                        <h2>{propertyData?.propertySection?.title}<span className="dot"></span></h2>
                    </div>
                </div>
                <div className="row">
                    {propertyData?.propertySection?.PropertyList.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-sm-6 col-xs-12" key={index}>
                                <div className="list_box">
                                    <img alt="" src={`${basePath}/${item?.img}`} />
                                    <div className='box_details'>
                                        <div className='row'>
                                            <h3>{item?.projectName}</h3>
                                        </div>
                                        <p className='address'><img alt=""src={`${basePath}/img/icons/bedroomtype.svg`} />{item?.appartmentType}</p>
                                        <p className='flate-type'><img alt=""src={`${basePath}/img/icons/address.svg`} /> {item?.address}</p>
                                        <span>STARTING FROM</span>
                                        <p className='price'>{item?.price}</p>
                                        <button onClick={() => setIsOpen(true)}><img alt=""src={`${basePath}/img/icons/talk.svg`} /> Talk to an agent</button>
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
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default PropertyList;