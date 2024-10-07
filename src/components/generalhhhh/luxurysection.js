import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';

import LuxurySectionData from "../../content/generalLP.json";
// import LuxuryImg from "../../img/luxury_logo.png";
// import TalkToAgentIcon from "../../img/icons/talk.svg";
import RegistrationFormPopup from "../comman/registrationFormPopup";


Modal.setAppElement('#root');

const InnerSlider = ({ innerSlides }) => {
    const innerSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='innersliderslides'>
            <Slider {...innerSettings}>
                {innerSlides.map((slide, index) => (
                    <div className='innerslider_img' key={index}>
                        <img alt=""src={slide?.img} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const OuterSlider = () => {

    const outerSettings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [isOpen, setIsOpen] = useState(false);

    const onRequestClose = () => {
        setIsOpen(false);
    }

    return (
        <Slider {...outerSettings}>
            {LuxurySectionData?.LuxurySection?.LuxuryList?.map((slide, index) => (
                <div key={index}>
                    <div className='outersliderluxury' style={{ backgroundColor: `${slide?.backgroundColorOption}` }} >
                        <InnerSlider innerSlides={slide?.sliderimges} />
                        <div className='outerslider_detail'>
                            <h3>{slide?.name}</h3>
                            <h4>{slide?.secondName}</h4>
                            <p className='priceLx'>{slide?.price}</p>
                            <p className='bedroomtype'>{slide?.bedrooms}</p>
                            <img alt=""src={slide?.logo} className='developerimglogo' />
                            <button onClick={() => setIsOpen(true)} className='agent_talk_btn'><img alt=""src={'img/icons/talk.svg'} /> Talk to an agent</button>
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
            ))}
        </Slider>
    );
};

const LuxurySection = () => {
    return (
        <div className="container-fluid pb-100 pt-100 bg-dark-gry">
            <div className="container">
                <div className="row LuxurySection_row_section align-cent">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className='luxury-logo'>
                            <img alt=""src={'img/luxury_logo.png'} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className='luxury_description'>
                            <h3>{LuxurySectionData?.LuxurySection?.title}</h3>
                            <p>{LuxurySectionData?.LuxurySection?.description}</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='luxurySlider pt-100'>
                        <OuterSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuxurySection;