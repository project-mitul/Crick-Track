// import React, { useState } from "react";
// import "./ContactUs.css";
// import Footer from '../components/Footer';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const response = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
//       } else {
//         setStatus("Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       setStatus("Error sending message. Check your network.");
//     }
//   };

//   return (
//     <div className="contact-page">
//       <div className="header-banner">
//         <div className="header-content">
//           <p className="contact-label">CONTACT US</p>
//           <h1>Get In Touch</h1>
//           <p className="header-description">
//             We're here to help you unlock the power of data! On this page, you'll find all the ways to get in touch.
//           </p>
//         </div>
//       </div>

//       <div className="contact-content">
//         <div className="contact-options">
//           <div className="contact-card phone">
//             <div className="icon-container">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.947 20 10.999z"></path>
//                 <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
//               </svg>
//             </div>
//             <h3>Phone</h3>
//             <p>09405 4316235</p>
//           </div>

//           <div className="contact-card location">
//             <div className="icon-container">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12 2C7.589 2 4 5.589 4 9.995c0 7.381 7.1 11.777 7.4 11.996.3.22.6.22.9 0 .3-.22 7.4-4.615 7.4-11.996C19.7 5.589 16.411 2 12 2zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"></path>
//               </svg>
//             </div>
//             <h3>Location</h3>
//             <p>Pete Harbour Evieville</p>
//           </div>

//           <div className="contact-card email">
//             <div className="icon-container">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
//               </svg>
//             </div>
//             <h3>E-Mail</h3>
//             <p>hi@analyticshub.com</p>
//           </div>
//         </div>

//         <div className="contact-sections">
//           <div className="form-section">
//             <form onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <input 
//                   type="text" 
//                   placeholder="First name" 
//                   value={formData.firstName}
//                   onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                   required
//                 />
//                 <input 
//                   type="text" 
//                   placeholder="Email" 
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                 />
//               </div>
//               <div className="form-row">
//                 <input 
//                   type="text" 
//                   placeholder="Last name" 
//                   value={formData.lastName}
//                   onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                   required
//                 />
//                 <input 
//                   type="text" 
//                   placeholder="Phone number" 
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   required
//                 />
//               </div>
//               <textarea 
//                 placeholder="Message" 
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 required
//               ></textarea>
              
//               <div className="form-footer">
//                 <p className="terms">* I HAVE READ AND ACCEPTED <span>TERMS AND PRIVACY</span></p>
//                 <button type="submit" className="submit-btn">SEND</button>
//               </div>
//             </form>
//           </div>

//           <div className="info-section">
//             <h2>GET A QUOTE</h2>
//             <h3>Contact Us Today!</h3>
//             <p>Unlock the full potential of your business with the most innovative team that supports you in reaching to advance your performance.</p>
//             <div className="benefits">
//   <div className="benefit">
//     <div className="benefit-icon">
//       <img src="../images/talk.png" alt="Consultation Icon" />
//     </div>
//     <div className="benefit-text">
//       <h4>Free Initial Consultation</h4>
//       <p>Let's discuss your business goals and explore how our analytics solutions can benefit you.</p>
//     </div>
//   </div>

//   <div className="benefit">
//     <div className="benefit-icon">
//       <img src="../images/guidance.png" alt="Guidance Icon" />
//     </div>
//     <div className="benefit-text">
//       <h4>Expert Guidance</h4>
//       <p>Our seasoned analysts offer clear, actionable insights based on your data.</p>
//     </div>
//   </div>
// </div>


//           </div>
//         </div>
        
      
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import "./ContactUs.css";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Check your network.");
    }
  };

  return (
    <div className="contact-page">
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="CrickTrack.ai Logo" className="logo-image" />
                    </div>
                    <div className="nav-links">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                        <Link to="/pricing" className="nav-link">
                            Plan & Pricing
                        </Link>
                    </div>
                </nav>
            </header>

      <div className="header-banner">
        <div className="header-content">
          <p className="contact-label">CONTACT US</p>
          <h1>Get In Touch</h1>
          <p className="header-description">
            We're here to help you unlock the power of data! On this page, you'll find all the ways to get in touch.
          </p>
        </div>
      </div>

      <div className="contact-content">
        {/* <div className="contact-options">
          <div className="contact-card phone">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.947 20 10.999z"></path>
                <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
              </svg>
            </div>
            <h3>Phone</h3>
            <p>+918780073291</p>
          </div>

          <div className="contact-card location">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C7.589 2 4 5.589 4 9.995c0 7.381 7.1 11.777 7.4 11.996.3.22.6.22.9 0 .3-.22 7.4-4.615 7.4-11.996C19.7 5.589 16.411 2 12 2zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"></path>
              </svg>
            </div>
            <h3>Location</h3>
            <p>Parul University</p>
          </div>

          <div className="contact-card email">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
              </svg>
            </div>
            <h3>E-Mail</h3>
            <p>mithulnathani111@gmail.com</p>
          </div>
        </div> */}

        <div className="contact-sections">
          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="First name" 
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
                <input 
                  type="text" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Last name" 
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
                <input 
                  type="text" 
                  placeholder="Phone number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <textarea 
                placeholder="Message" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
              
              <div className="form-footer">
                <p className="terms">* I HAVE READ AND ACCEPTED <span>TERMS AND PRIVACY</span></p>
                <button type="submit" className="submit-btn">SEND</button>
              </div>
            </form>
          </div>

          <div className="info-section">
            <h2>GET A QUOTE</h2>
            <h3>Contact Us Today!</h3>
            <p>Unlock the full potential of your business with the most innovative team that supports you in reaching to advance your performance.</p>
            <div className="benefits">
  <div className="benefit">
    <div className="benefit-icon">
      <img src="../images/talk.png" alt="Consultation Icon" />
    </div>
    <div className="benefit-text">
      <h4>Free Initial Consultation</h4>
      <p>Let's discuss your business goals and explore how our analytics solutions can benefit you.</p>
    </div>
  </div>

  <div className="benefit">
    <div className="benefit-icon">
      <img src="../images/guidance.png" alt="Guidance Icon" />
    </div>
    <div className="benefit-text">
      <h4>Expert Guidance</h4>
      <p>Our seasoned analysts offer clear, actionable insights based on your data.</p>
    </div>
  </div>
</div>


          </div>
        </div>
        
      
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;