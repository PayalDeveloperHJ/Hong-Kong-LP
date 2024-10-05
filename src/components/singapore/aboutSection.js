import React from 'react';
import getBasePath from '../../utils/getBasePath';
import SingaporeContent from '../../content/singapore.json';

const AboutSection = () => {
    const basePath = getBasePath();
    return (
        <div className="singapore_about pb-100 pt-100">
            <div className="container">
                <div className="row">
                    <div className='about_heading'>
                        <h2>{SingaporeContent?.title}<span className="dot"></span></h2>
                        <h3>{SingaporeContent?.subtitle}</h3>
                    </div>
                    <div className='about_text'>
                        <h3>{SingaporeContent?.aboutHJtitle}<span className="dot"></span></h3>
                        <p>{SingaporeContent?.abouttext}</p>
                        <div className='row pt-50'>
                            {SingaporeContent?.info?.map((item, index) => {
                                return (
                                    <div className='col-lg-3 col-sm-6 col-6' key={index}>
                                        <div className='row align-cent'>
                                            <div className='col-lg-4 col-sm-3 col-5'>
                                                <div className='list_icon'>
                                                    <img src={`${basePath}/${item?.icone}`} alt='' />
                                                </div>
                                            </div>
                                            <div className='col-lg-8 col-sm-9 col-7'>
                                                <div className='list_text'>
                                                    <h3>{item?.counter}+</h3>
                                                    <p>{item?.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutSection;