import React, { useState, useRef } from 'react';
import ThankYouPopup from '../comman/thankyouPage';
import Modal from 'react-modal';
import axios from 'axios';


Modal.setAppElement('#root');

const RegistrationForm = () => {
    const form = useRef();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        useremain: '',
        countrycode: '',
        contactnumber: '',
        agree1: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const validatePhoneNumber = (number) => {
        const phoneRegex = /^\d{10}$/; // Adjust regex according to your needs
        return phoneRegex.test(number);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (validatePhoneNumber(formData?.contactnumber)) {
            setError('');
            console.log('Valid phone number:', formData?.contactnumber);
            // Proceed with form submission
        } else {
            setError('Invalid phone number. Please enter a 10-digit number.');
        }

        console.log('Form submitted:', formData);
        const jsonLeadData = JSON.stringify(formData, null, 2);

        try {
            const response = await axios.post('https://connect.leadrat.com/api/v1/integration/Website', jsonLeadData, {
                headers: {
                  'Content-Type': 'application/json',
                  // 'Authorization': `Bearer YOUR_ACCESS_TOKEN` // Add your auth token if required
                },
              });
              console.log('Lead created:', response.data);
              setModalIsOpen(true);
            // Submit to Email Service
            //   await fetch('http://localhost:5000/send-email', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData),
            //   });

            // Submit to CRM
            // await fetch('https://connect.leadrat.com/api/v1/integration/Website', { // Replace with your CRM endpoint
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${process.env.REACT_APP_CRM_API_KEY}`, // Environment variable
            //     },
            //     body: JSON.stringify(formData),
            // });
            // setModalIsOpen(true);

            // Submit to Google Sheets
            //   await fetch('https://api.google.com/sheets', { // Replace with your Google Sheets API endpoint
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json',
            //       'Authorization': `Bearer ${process.env.REACT_APP_GOOGLE_API_KEY}`, // Environment variable
            //     },
            //     body: JSON.stringify(formData),
            //   });

            //   alert('Form submitted successfully!');

            // Clear the form after submission
            // setFormData({
            //     fname: '',
            //     lname: '',
            //     useremain: '',
            //     countrycode: '',
            //     contactnumber: '',
            //     agree1: '',
            // });


        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        }

    };


    return (
        <div>
            <div className="registration-form">
                <h2>Register your interest</h2>
                <form ref={form} id="registrationForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                    />
                    <input
                        type="text"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                    />
                    <input
                        type="email"
                        name="useremain"
                        value={formData.useremain}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="number"
                        name="countrycode"
                        value={formData.countrycode}
                        onChange={handleChange}
                        placeholder="Country Code"
                        className="c_code"
                        required
                    />
                    <input
                        type="text"
                        name="contactnumber"
                        value={formData.contactnumber}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="c_number"
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <input type="checkbox" id="agree1" name="agree1" value="yesno" />
                    <label for="agree1"> I would like receive news & offers</label>
                    <input type="submit" value="Register your interest now" onSubmit={handleSubmit} />
                </form>
            </div>
            <Modal
                isOpen={modalIsOpen}
                className="thankyouModel"
                onRequestClose={closeModal}
                contentLabel="Thankyou Modal"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <button className="close-button"
                    onClick={closeModal}
                ><img src={`${basePath}/img/icons/close_btn.svg`} alt='close Popup' /></button>
                <ThankYouPopup />
            </Modal>

        </div>
    );
};

export default RegistrationForm;