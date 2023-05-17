import React, { useState } from 'react';

function DocumentVerification() {
  const [step, setStep] = useState(1);
  const [idNumber, setIdNumber] = useState('');
  const [frontImage, setFrontImage] = useState();
  const [backImage, setBackImage] = useState();
  const [idNumberError, setIdNumberError] = useState('');
  const [frontImageError, setFrontImageError] = useState('');
  const [backImageError, setBackImageError] = useState('');

  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
  };

  const handleFrontImageChange = (e) => {
    setFrontImage(e.target.files[0]);
  };

  const handleBackImageChange = (e) => {
    setBackImage(e.target.files[0]);
  };

  const handleNextClick = () => {
    if (step === 1) {
      // Perform validation on ID number
      if (!idNumber) {
        setIdNumberError('Please enter your national identification number');
      } else if (!/^[0-9]{9}$/.test(idNumber)) {
        setIdNumberError('Invalid ID number format');
      } else {
        setIdNumberError('');
        setStep(2);
      }
    } else if (step === 2) {
      // Perform validation on uploaded images
      if (!frontImage) {
        setFrontImageError('Please upload the front of your ID');
      } else if (frontImage.size > 5 * 1024 * 1024) {
        setFrontImageError('Image file size must be less than 5MB');
      } else if (!backImage) {
        setBackImageError('Please upload the back of your ID');
      } else if (backImage.size > 5 * 1024 * 1024) {
        setBackImageError('Image file size must be less than 5MB');
      } else {
        setFrontImageError('');
        setBackImageError('');
        setStep(3);
      }
    } else {
      // Submit form
      const formData = new FormData();
      formData.append('idNumber', idNumber);
      formData.append('frontImage', frontImage);
      formData.append('backImage', backImage);
      // Send formData to server for verification and processing
    }
  };

  const handleSkipClick = () => {
    // Skip document verification and proceed to next step
    setStep(3);
  };

  return (
    <div>
      <h2>Document Verification</h2>
      <p>Please enter your national identification number and upload photos of the front and back of your ID.</p>
      {step === 1 && (
        <form>
          <label>
            National Identification Number:
            <input type="text" value={idNumber} onChange={handleIdNumberChange} />
          </label>
          {idNumberError && <p>{idNumberError}</p>}
        </form>
      )}
      {step === 2 && (
        <div>
          <p>Front of ID:</p>
          <input type="file" onChange={handleFrontImageChange} />
          {frontImageError && <p>{frontImageError}</p>}
          <p>Back of ID:</p>
          <input type="file" onChange={handleBackImageChange} />
          {backImageError && <p>{backImageError}</p>}
        </div>
      )}
      <div>
       
      {step === 1 || step === 2 ? (
    <button onClick={handleNextClick}>Next</button>
    ) : (
     <div>
         <p>Document verification complete!</p>
         {/* Render additional content or buttons for next step */}
     </div>
    )}
        {step === 1 && <button onClick={handleSkipClick}>Skip</button>}
    </div>
    </div>
    );
    }

export default DocumentVerification;