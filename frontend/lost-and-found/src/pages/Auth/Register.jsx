import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  // 1. State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Registered:", formData);
    // Later, you will send this 'formData' to your backend API here
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        
        <input 
          type="text" name="username" placeholder="Username" 
          value={formData.username} onChange={handleChange} required 
        />
        
        <input 
          type="email" name="email" placeholder="Email" 
          value={formData.email} onChange={handleChange} required 
        />
        
        <input 
          type="password" name="password" placeholder="Password" 
          value={formData.password} onChange={handleChange} required 
        />
        
        <input 
          type="password" name="confirmPassword" placeholder="Confirm Password" 
          value={formData.confirmPassword} onChange={handleChange} required 
        />
        
        <button type="submit">Register</button>
        
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Register;