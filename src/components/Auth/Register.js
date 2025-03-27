// src/components/Auth/Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Temporary: Just navigate to dashboard without authentication
      console.log("Registration data:", { name, email, password });
      navigate('/dashboard');
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during registration");
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Prevent form submission
    console.log(`${provider} login clicked`);
  };
  
  return (
    <div className="register-container">
      <div className="cricket-field">
        <div className="pitch-line pitch-line-1"></div>
        <div className="pitch-line pitch-line-2"></div>
        <div className="pitch-line pitch-line-3"></div>
        <div className="stumps">
          <div className="stump"></div>
          <div className="stump"></div>
          <div className="stump"></div>
          <div className="bails"></div>
        </div>
      </div>
      
      <div className="register-form-container">
        <div className="cricket-ball-container">
          <div className="cricket-ball">
            <div className="seam seam-1"></div>
            <div className="seam seam-2"></div>
          </div>
          <div className="ball-trail"></div>
        </div>
        
        <h1>Join CrickTrack.ai</h1>
        <p className="register-subtitle">Track your cricket performance with AI precision</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Enter your email address"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Create a strong password"
              minLength="6"
            />
          </div>
          
          <button 
            type="submit" 
            className={`register-button ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className="loading-spinner"></span>
            ) : (
              "Register"
            )}
          </button>
        </form>
        
        <div className="social-login">
          <p>Or register with</p>
          <div className="social-buttons">
            <button 
              type="button" 
              className="social-button google"
              onClick={() => handleSocialLogin('Google')}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              Google
            </button>
            <button 
              type="button" 
              className="social-button facebook"
              onClick={() => handleSocialLogin('Facebook')}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M20.9,2H3.1C2.5,2,2,2.5,2,3.1v17.8C2,21.5,2.5,22,3.1,22h9.6v-7.7h-2.6v-3h2.6V9.2c0-2.6,1.6-4,3.9-4c1.1,0,2.1,0.1,2.3,0.1v2.7h-1.6c-1.3,0-1.5,0.6-1.5,1.5v1.9h3l-0.4,3h-2.6V22h5.1c0.6,0,1.1-0.5,1.1-1.1V3.1C22,2.5,21.5,2,20.9,2z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>
        
        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;