import React from 'react';
import getBasePath from '../../utils/getBasePath';

const Footer = () => {
    const basePath = getBasePath();

    return (
        <div className="container-fluid bg-blue footer_section">
            <div className="container descktop_view">
                <div className='row align-cent'>
                    <div className='col-lg-5 col-sm-5 col-xs-12'>
                        <div className='footer_left'>
                            <ul className='flag_icons'>
                                <li><img alt="" src={`${basePath}/img/icons/flag01.png`} /></li>
                                <li><img alt="" src={`${basePath}/img/icons/flag02.png`} /></li>
                                <li><img alt="" src={`${basePath}/img/icons/flag03.png`} /></li>
                                <li><img alt="" src={`${basePath}/img/icons/flag04.png`} /></li>
                                <li><img alt="" src={`${basePath}/img/icons/flag05.png`} /></li>
                            </ul>
                            <p>©2024 HJ Real Estates LLC. All Rights Reserved. <br></br>
                                HJ Real Estates LLC is a company registered in Dubai, United Arab Emirates</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-sm-2 col-xs-12'>
                        <div className='footer_center'>
                            <a href="https://hjrealestates.com/"><img alt="" src={`${basePath}/img/HJ-logo-white.png`} /></a>
                        </div>
                    </div>
                    <div className='col-lg-5 col-sm-5 col-xs-12'>
                        <div className='footer_right'>
                            <ul className='social_icons'>
                                <li><a href="https://www.facebook.com/hjrealestatess" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}/img/icons/Facebook01.png`} /></a></li>
                                <li><a href="https://www.instagram.com/hjrealestates" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}/img/icons/Instagram01.png`} /></a></li>
                                <li><a href="https://www.linkedin.com/company/hjrealestates" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}/img/icons/Linkedin01.png`} /></a></li>
                                <li><a href="https://x.com/HJRealestates" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}//img/icons/X01.png`} /></a></li>
                                <li><a href="https://www.youtube.com/@hjrealestates?sub_confirmation=1" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}/img/icons/Youtube01.png`} /></a></li>
                                <li><a href="https://www.tiktok.com/@hjrealestates" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}/img/icons/Tiktok01.png`} /></a></li>
                                {/* <li><a href="#" target='_blank' rel="noreferrer"><img alt=""src={`${basePath}/img/icons/Snapchat01.png`} /></a></li> */}
                            </ul>
                            <ul className='footer_menu'>
                                <li><a href="https://hjrealestates.com/">Home</a></li>
                                <li><a href="https://hjrealestates.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="https://hjrealestates.com/terms-conditions/">Terms & Conditions</a></li>
                                <li><a href="https://hjrealestates.com/cookie-policy/">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mobile_view">
                <div className='row align-cent'>
                    <div className='col-lg-2 col-sm-4 col-xs-12'>
                        <div className='footer_center'>
                            <a href="https://hjrealestates.com/"><img alt="" src={`${basePath}/img/HJ-logo-white.png`} /></a>

                        </div>
                    </div>
                    <div className='col-lg-5 col-sm-4 col-xs-12'>
                        <div className='footer_left'>
                            <ul className='flag_icons'>
                                <li><img alt="" src={`${basePath}/img/icons/flag01.png`} /></li>
                                <li><img alt="" src={`${basePath}/img/icons/flag02.png`} /></li>
                                <li><img alt="" src={`${basePath}/img/icons/flag03.png`} /></li>
                                <li><img alt="" src={`${basePath}/img/icons/flag04.png`} /></li>
                                <li><img alt="" src={`${basePath}/img/icons/flag05.png`} /></li>
                            </ul>
                            <ul className='social_icons'>
                                <li><a href="https://www.facebook.com/hjrealestatess" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}/img/icons/Facebook01.png`} /></a></li>
                                <li><a href="https://www.instagram.com/hjrealestates" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}/img/icons/Instagram01.png`} /></a></li>
                                <li><a href="https://www.linkedin.com/company/hjrealestates" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}/img/icons/Linkedin01.png`} /></a></li>
                                <li><a href="https://x.com/HJRealestates" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}//img/icons/X01.png`} /></a></li>
                                <li><a href="https://www.youtube.com/@hjrealestates?sub_confirmation=1" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}/img/icons/Youtube01.png`} /></a></li>
                                <li><a href="https://www.tiktok.com/@hjrealestates" target='_blank' rel="noreferrer"><img alt="" src={`${basePath}/img/icons/Tiktok01.png`} /></a></li>
                                {/* <li><a href="#" target='_blank' rel="noreferrer"><img alt=""src={`${basePath}/img/icons/Snapchat01.png`} /></a></li> */}
                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-5 col-sm-4 col-xs-12'>
                        <ul className='footer_menu'>
                            <li><a href="https://hjrealestates.com/">Home</a></li>
                            <li><a href="https://hjrealestates.com/privacy-policy/">Privacy Policy</a></li>
                            <li><a href="https://hjrealestates.com/terms-conditions/">Terms & Conditions</a></li>
                            <li><a href="https://hjrealestates.com/cookie-policy/">Cookie Policy</a></li>
                        </ul>
                        <div className='footer_right'>
                            <p>©2024 HJ Real Estates LLC. All Rights Reserved. <br></br>
                                HJ Real Estates LLC is a company registered in Dubai, United Arab Emirates</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;