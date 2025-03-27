import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    // For now, we'll just navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      {/* Stadium elements */}
      <div className="stadium-top"></div>
      <div className="stadium-bottom"></div>

      {/* Cricket pitch */}
      <div className="cricket-pitch">
        <div className="pitch-center"></div>
        <div className="crease left-crease"></div>
        <div className="crease right-crease"></div>
        <div className="stumps-container left-stumps">
          <div className="stump"></div>
          <div className="stump"></div>
          <div className="stump"></div>
          <div className="bails"></div>
        </div>
        <div className="stumps-container right-stumps">
          <div className="stump"></div>
          <div className="stump"></div>
          <div className="stump"></div>
          <div className="bails"></div>
        </div>
      </div>

      {/* Animated cricket balls */}
      <div className="ball ball-1"></div>
      <div className="ball ball-2"></div>
      <div className="ball ball-3"></div>

      {/* Login form */}
      <div className="login-card">
        <div className="logo-container">
          <div className="logo_login">
            <div className="tracker-ring"></div>
            <div className="tracker-ring inner"></div>
            <div className="cricket-ball-logo"></div>
            <svg className="trajectory" width="120" height="40" viewBox="0 0 120 40">
              <path d="M10,20 Q60,5 110,20" stroke="#3a7d44" strokeWidth="2" strokeDasharray="4 2" fill="none" />
            </svg>
          </div>
        </div>

        <h1 className="welcome-text">CrickTrack<span className="accent">.ai</span></h1>
        <p className="tagline">AI-Powered Ball Tracking & Analysis</p>
        <p className="signup-text">
          Don't have an account yet? <a href="/register" className="signup-link">Register</a>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon email-icon">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path fill="currentColor" d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z"/>
              </svg>
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon lock-icon">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path fill="currentColor" d="M18,8h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M12,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,17,12,17z M15.1,8H8.9V6c0-1.71,1.39-3.1,3.1-3.1c1.71,0,3.1,1.39,3.1,3.1V8z"/>
              </svg>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="remember-forgot">
            <label className="remember-me">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="#forgot" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">
            <span className="btn-text">Login</span>
            <span className="ball-trajectory">
              <span className="trajectory-ball"></span>
            </span>
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="social-login">
            <button className="social-btn google-btn" aria-label="Sign in with Google">
              <div className="social-cricket-ball">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M21.35 11.26h-9.17v3.04h5.23c-.5 2.39-2.62 4.12-5.23 4.12-3.18 0-5.76-2.58-5.76-5.76s2.58-5.76 5.76-5.76c1.37 0 2.62.47 3.6 1.26l2.33-2.33A9.1 9.1 0 0 0 12.18 4C7.03 4 2.85 8.18 2.85 13.33s4.18 9.33 9.33 9.33c4.66 0 8.58-3.37 9.33-7.84.1-.6.15-1.23.15-1.87 0-.52-.04-1.04-.11-1.54l-.2-.15z"/>
                </svg>
              </div>
              <span className="btn-label">Google</span>
            </button>

            <button className="social-btn facebook-btn" aria-label="Sign in with Facebook">
              <div className="social-cricket-ball">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20.9,2H3.1C2.5,2,2,2.5,2,3.1v17.8C2,21.5,2.5,22,3.1,22h9.6v-7.7h-2.6v-3h2.6V9.2c0-2.6,1.6-4,3.9-4c1.1,0,2.1,0.1,2.3,0.1v2.7h-1.6c-1.3,0-1.5,0.6-1.5,1.5v1.9h3l-0.4,3h-2.6V22h5.1c0.6,0,1.1-0.5,1.1-1.1V3.1C22,2.5,21.5,2,20.9,2z"/>
                </svg>
              </div>
              <span className="btn-label">Facebook</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;