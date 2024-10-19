import React, { useState } from 'react';
import RegistrationData from '../../content/singapore.json';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const RegistrationSection = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        useremain: '',
        contactnumber: '',
        countrycode: '',
    });

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePhoneChange = (value, data) => {
        setFormData({
            ...formData,
            countrycode: data.dialCode,
            contactnumber: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        const formSchema = {
            name: formData.fullname,
            email: formData.useremain,
            mobile: formData.contactnumber,
            countrycode: formData.countrycode,
        }

        fetch("https://connect.leadrat.com/api/v1/integration/GoogleAds", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "API-Key": "NDUxNmFmOGQtYTEyYS00YTQzLTg1YTktYTU4NDQwMjZhMmU4",
            },
            body: JSON.stringify(formSchema),
        })
            .then((response) => {
                console.log(response, ":: response")
                if (!response.ok) {
                    throw new Error("Failed to submit form");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Success:", data);
                if (data?.data !== true) {
                    setError('Oops! This number is already registered. Try with another number.');
                } else {
                    window.location.href = 'https://hjrealestates.com/event/thank-you';
                }
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    };

    return (
        <div className='formSection'>
            <div className='container-fluid pb-100 pt-100'>
                <div className='container'>
                    <div className='row align-cent'>
                        <div className='col-lg-5 col-sm-6 col-12'>
                            <div className='regFormDiv'>
                                <form onSubmit={handleSubmit}>
                                    {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
                                    <input
                                        type="text"
                                        name="fullname"
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        placeholder="Full Name*"
                                        required
                                    />
                                    <PhoneInput
                                        country={'hk'} // Default country
                                        value={formData.contactnumber}
                                        onChange={handlePhoneChange}
                                        inputStyle={{ width: '100%' }}
                                        placeholder="Contact Number*"
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
                                        type="submit"
                                        value="Register"
                                        className={isSubmitting ? 'btndisabled formsubmitbtn' : 'formsubmitbtn'}
                                    />
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-6 col-sm-6 col-12'>
                            <div className='formTextDiv'>
                                <h2>{RegistrationData?.RegistrationSection?.title}<span className="dot"></span></h2>
                                <p>{RegistrationData?.RegistrationSection?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegistrationSection;