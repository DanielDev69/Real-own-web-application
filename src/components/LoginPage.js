import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:3000/login',{
        email,
        password,
      });

      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      navigate.push('/dashboard');
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;