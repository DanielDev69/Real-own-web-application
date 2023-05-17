import React, { useState } from 'react';
import './TermsandConditions';
import './Faq';
import './Profile.css';
import daniel from "../assets/daniel.jpg";
import { Link } from 'react-router-dom';

function Profile() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleWithdrawalClick = () => {
    // This is just a placeholder function for demonstration purposes
    alert('Withdrawal request submitted!');
  };

  const handleDepositClick = () => {
    // This is just a placeholder function for demonstration purposes
    alert('Deposit request submitted!');
  };

  const handleLogoutClick = () => {
    // This is just a placeholder function for demonstration purposes
    alert('Logged out!');
  };

  return (
    <div className="profile-container">
      <div className="profile-section">
        <h1>Profile</h1>
        <div className="profile-info">
          <img src={ daniel } alt="User" />
          <div className="profile-name">
            <p>{username}</p>
            <form>
              <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
              </label>
            </form>
          </div>
          <div className="profile-buttons">
            <button className="green-button" onClick={handleWithdrawalClick}>Withdrawal</button>
            <button className="green-button" onClick={handleDepositClick}>Deposit</button>
          </div>
        </div>
      </div>
      <div className="profile-section">
        <h2>Account</h2>
        <ul>
          <li><a href="#">ID Verification</a></li>
          <li><a href="#">Banks and Cards</a></li>
          <li><a href="#">Referrals</a></li>
        </ul>
      </div>
      <div className="profile-section">
        <h2>Security</h2>
        <ul>
          <li><a href="#">Create 2FA</a></li>
          <li><a href="#">Change Pin</a></li>
        </ul>
      </div>
      <div className="profile-section">
        <h2>About REALOWN</h2>
        <ul>
          <li>
            <Link to="/TermsandConditions">Terms and Conditions</Link>
            </li>
          <li><Link to={ "Faq" }>FAQ</Link></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Join Our Community</a></li>
        </ul>
      </div>
      <div className="profile-section">
        <button className="logout-button" onClick={handleLogoutClick}>Log Out</button>
      </div>
    </div>
  );
}

export default Profile;
