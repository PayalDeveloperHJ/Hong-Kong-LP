
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the styles
import getBasePath from '../../utils/getBasePath';


const RegistrationPopupForm = () => {
    const basePath = getBasePath();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
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
        // setSuccessMessage('');
        setIsSubmitting(true);

        const formSchema = {
            name: formData.fname + " " + formData.lname,
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
                if (data?.data !== true) {
                    // alert("Oops! This number is already registered. Try another.")
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
        <div className='registrationPopupForm'>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='registration'>
                        <div className='row reg_align'>
                            <div className='col-lg-6 col-sm-6 col-12'>
                                <div className='registration_img'>
                                    <img src={`${basePath}/img/singapore/registration-side-img-desc.png`} alt={`Registration`} className='deck_img' />
                                    <img src={`${basePath}/img/singapore/registration-side-img-mob.png`} alt={`Registration`} className='mob_img' />
                                    <div className='reg_desc'>
                                        <h2>Registration<span className='dot'></span></h2>
                                        <p>Fill out the form, and one of our team members will get in touch with you soon</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-sm-6 col-12'>
                                <form onSubmit={handleSubmit}>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    <input
                                        type="text"
                                        name="fname"
                                        value={formData.fname}
                                        onChange={handleChange}
                                        placeholder="First Name*"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lname"
                                        value={formData.lname}
                                        onChange={handleChange}
                                        placeholder="Last Name*"
                                        required
                                    />
                                    <PhoneInput
                                        country={'hk'}
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
                                    <input type="checkbox" id="agree1" name="agree1" value="yesno" />
                                    <label for="agree1"> Keep me informed about upcoming property launches and exclusive offers.</label>

                                    <input type="submit" value="Submit" className={isSubmitting ? 'btndisabled formsubmitbtn' : 'formsubmitbtn'} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RegistrationPopupForm;
