import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ThankYouPopup = () => {
    return (
            <div className="container-fluid bg-gray thankyousection">
                <div className="container">
                    <div className="row">
                        <div className='thankyouDetail'>
                            <img alt=""src="../img/icons/green-tick.png" />
                            <h2>Thank You For The Registration!</h2>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ThankYouPopup;