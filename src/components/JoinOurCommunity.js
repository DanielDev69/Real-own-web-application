import React, { useState } from 'react'

const JoinOurCommunity = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        //Validate the email address
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if(!isValidEmail) {
            setIsSubmitting(false);
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        try{
            //Send the email to your server or API here
            //This is just a dummy fetch call that waits for 1 second

            await new Promise(resolve => 
                setTimeout(resolve, 1000));
                setIsSubmitting(false);
                setIsSubmitted(true);
                setEmail('');
        }catch (error){
            setIsSubmitting(false);
            setErrorMessage("Something went wrong. Please try again later.");
        }
    };

  return (
    <div className="join-our-community">
        <h2>Join Our Community</h2>
        {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email;</label>
                <input type="email"
                id="email"
                name="email"
                placeholder='Enter your email address'
                value={email}
                onChange={handleEmailChange}
                required
                />
                {errorMessage && <div className="error">{errorMessage}</div>}
                <button type="submit"
                disable={isSubmitting}>
                    {isSubmitting ? 'Submitting...': 'Join Now'}
                </button>
            </form>
        ):(
            <div className="success">Thank you for joining our community!</div>
        )}
    </div>
  );
};

export default JoinOurCommunity