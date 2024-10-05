import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the styles


const RegistrationFormPopup = ({onSuccess}) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    useremain: '',
    contactnumber: '',
    countrycode:'',
    pageName: 'Hong Kong Landing Page'
  });

  const [error, setError] = useState('');
  // const [successMessage, setSuccessMessage] = useState('');

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

    const formSchema = {
      name: formData.fname + " " + formData.lname,
      email: formData.useremain,
      mobile: formData.contactnumber,
      countrycode: formData.countrycode,
      pageName: formData.pageName
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
        window.location.href = 'https://hjrealestates.com/thank-you';
        console.log("Success:", data);
        onSuccess(false);  // Close the modal on success
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };

  return (
    <div className="registrationpopup">
      <h2>Registration<span className="dot"></span></h2>
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
          country={'us'} // Default country
          value={formData.contactnumber}
          onChange={handlePhoneChange}
          inputStyle={{ width: '100%' }}
          placeholder="Contact Number*"
          required
        />
        {/* <input
          type="text"
          name="countrycode"
          value={formData.countrycode}
          onChange={handleChange}
          placeholder="Country Code*"
          className="c_code"
          required
        />
        <input
          type="text"
          name="contactnumber"
          value={formData.contactnumber}
          onChange={handleChange}
          placeholder="Contact Number*"
          className="c_number"
          required
        /> */}
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
        <input type="submit" value="Submit" className='formsubmitbtn' />
      </form>
    </div>
  );
};

export default RegistrationFormPopup;