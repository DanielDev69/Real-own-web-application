import React, { useState } from 'react'
import './FormReg.css'
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import Verification from './Verification';
import ContinueRegistration from './ContinueRegistration';
import Identity from './Identity'
import SurveyForm from './SurveyForm'
import ProfileRegistration from './ProfileRegistration'
import Kunle from '../assets/Kunle.jpg';


const RegForm = () => {
  
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    verification: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    dateOfBirth: 0,
    nationality: "",
    frontNin: "",
    backNin: "",
    question: "",
    answer: "",
    fileUpload: "",
  })

  const navigate = useNavigate();

const handleSubmit = async () => {
  try {
    const formFields = Object.keys(formData);
    const unfilledFields = formFields.filter(field => formData[field] === "");
    if (unfilledFields.length > 0) {
      alert(`Please fill in the following fields: ${unfilledFields.join(", ")}`);
      return;
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to submit form data');
    }
    navigate('/home');
  } catch (error) {
    console.error(error);
    // show an error message to the user
  }
};


  const FormTitles = ["Sign up", "Verification", "Continue Registration", 
  "Identity", "Survey Form", "Profile Registration"]

  const pageDisplay = () => {
    if (page === 0) {
      return <SignUp formData={formData} setFormData={setFormData} />
    }else if (page === 1) {
      return <Verification formData={formData} setFormData={setFormData} />
    }else if (page === 2) {
      return <ContinueRegistration formData={formData} setFormData={setFormData} />
    }else if (page === 3) {
      return <Identity formData={formData} setFormData={setFormData} />
    }else if (page === 4) {
      return <SurveyForm formData={formData} setFormData={setFormData} />
    }else{
      return <ProfileRegistration formData={formData} setFormData={setFormData} />
    }
  };

  return (
    <section className="formContainer">
      <div className="register">
        <div className="col-1">
          <img src={ Kunle } alt=""/>
        </div>
        <div className="col-2">
          <div className="progressbar">
            <div className="progressbar_inner" style={{width: page === 0 ? "16.7%" : page === 1 ?
             "33.4%" : page === 2 ? "50.1%" : page === 3 ? "66.8%" : page === 4 ? "83.5" :  "102%"}}></div>
          </div>
          <div className="form-container">
            <div className="body">{pageDisplay()}</div>
            <div className="footer">
              <button 
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage -1);
                  }}
              >
                Prev
              </button>
              <button 
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    //alert("FORM SUBMITTED");
                    //api comes in here
                    handleSubmit();
                  }else {
                    setPage((currPage) => currPage +1);
                  }
                }}
                >
                  {page === FormTitles.length -1 ? "Submit" : "Next"}
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegForm;