import React, { useState } from 'react';
import Modal from 'react-modal';

import ProjectData from "../../content/generalLP.json";
// import ProjectImg from "../../img/Sobha-Orbis.png";
// import PropertyTypeicon from "../../img/icons/bedroomtype.svg";
// import AddressIcon from "../../img/icons/address.svg";
// import TalkToAgentIcon from "../../img/icons/talk.svg";
import RegistrationFormPopup from "../comman/registrationFormPopup";

Modal.setAppElement('#root');



const ProjectList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onRequestClose = () => {
        setIsOpen(false);
    }
    return (
        <div className="container-fluid bg-gray pb-100 po-re">
            <div className="container">
                <div className="row">
                    <div className="second_row_section">
                        <h2>{ProjectData.ProductSection.title}<span className="dot"></span></h2>
                        <h3>{ProjectData.ProductSection.subtitle}</h3>
                    </div>
                </div>
                <div className="row">
                    {ProjectData.ProductSection.ProjectList.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-sm-6 col-xs-12" key={index}>
                                <div className="list_box">
                                    <img alt=""src={item?.img} />
                                    <div className='box_details'>
                                        <div className='row'>
                                            <h3>{item?.projectName}</h3>
                                            <img alt=""src={item?.developerLogo} />
                                        </div>
                                        <p className='address'><img alt=""src={'img/icons/bedroomtype.svg'} />{item?.appartmentType}</p>
                                        <p className='flate-type'><img alt=""src={'img/icons/address.svg'} /> {item?.address}</p>
                                        <span>STARTING FROM</span>
                                        <p className='price'>{item?.price}</p>
                                        <button onClick={() => setIsOpen(true)}><img alt=""src={'img/icons/talk.svg'} /> Talk to an agent</button>
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
                <div className='row'>
                    <div className='register_btn'>
                        <button onClick={() => setIsOpen(true)}>Register for more interest</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;