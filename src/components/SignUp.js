import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


const SignUp = ({formData, setFormData}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");


  const handleBlur = async () => {
  try {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    } else {
      setError('');
    }

    const response = await axios.post('/api/generateToken', {
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword
    });
    const token = response.data.token;
    localStorage.setItem('token', token);
  } catch (error) {
    console.error(error);
  }
};


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <p>Please fill in this form to create an account.</p>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="username"
            name="email"
            required
            value={formData.email}
            onChange={(event) => setFormData({...formData, email: event.target.value}
            )}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={(event) => setFormData({...formData, password: event.target.value}
              )}
              onBlur={handleBlur}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={(event) => setFormData({...formData, confirmPassword: event.target.value}
              )}
              onBlur={handleBlur}
          /> 
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <button type="button" className="password-toggle" onClick={handleShowPassword}>
              {showPassword ? "Hide" : "Show"}
        </button>
      </form>
      <div>
        <div className='social'>
                <Link to="/">Google</Link>
                <Link to="/">Apple</Link>
                <Link to="/">Facebook</Link>
                <p>Already have an account?<Link to="/LoginPage"> Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
