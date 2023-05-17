import React from 'react';
import './Progressbar.css';

const ProgressBar = ({ registrationStatus }) => {
  const progressPercentage = registrationStatus === 'completed' ? 100 : 50;

  return (
    <div className="pro_reg">
    <h2>Registration Status</h2>
    <div className="progress">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }} />
      </div>
      <p>{registrationStatus === 'completed' ? 'Registration completed successfully!' : 'You need to complete your registration to have a fully functioning account'}</p>
      {registrationStatus === 'completed' ? null : <button className='button_reg'>Complete Registration --</button>}
    </div>
    </div>
  );
};

export default ProgressBar;
