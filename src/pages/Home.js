//phase 1 final --> 

// import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const videoSource = '/videos/QuickTrackbg.mp4';

// function Home() {
//     const dynamicReplayRef = useRef(null);
//     const performanceTrackerRef = useRef(null);

//     useEffect(() => {
//         // Intersection Observer (Existing code - keep this)
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add('show');
//                     }
//                 });
//             },
//             {
//                 threshold: 0.5,
//             }
//         );

//         if (dynamicReplayRef.current) {
//             observer.observe(dynamicReplayRef.current);
//         }
//         if (performanceTrackerRef.current) {
//             observer.observe(performanceTrackerRef.current);
//         }

//         return () => {
//             if (dynamicReplayRef.current) {
//                 observer.unobserve(dynamicReplayRef.current);
//             }
//             if (performanceTrackerRef.current) {
//                 observer.unobserve(performanceTrackerRef.current);
//             }
//         };
//     }, []);


//     const logos = [
//       "/images/indian.png",
//       "/images/ipl.png",
//       "/images/kpl.png",
//       "/images/rajsthan.jpg",
//       "/images/uae.jpg",
//       "/images/arbain.png",
//   ];

//     return (
//         <div className="home-container">
//             <header className="header">
//                 {/* Navbar (Existing code - keep this) */}
//                 <nav className="navbar">
//                     <div className="logo">QuickTrack.ai</div>
//                     <div className="nav-links">
//                         <Link to="/" className="nav-link">
//                             Home
//                         </Link>
//                         <Link to="/about" className="nav-link">
//                             About
//                         </Link>
//                         <Link to="/contact" className="nav-link">
//                             Contact
//                         </Link>
//                         <Link to="/pricing" className="nav-link">
//                             Plan & Pricing
//                         </Link>
//                     </div>
//                 </nav>
//             </header>

//             {/* Main Video Section (Existing code - keep this) */}
//             <section className="main-section">
//                 <video className="background-video" autoPlay loop muted>
//                     <source src={videoSource} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>

//                 <div className="overlay">
//                     {/* Hero Title and Subtitle (Existing code - keep this) */}
//                     <h1 className="hero-title">Data: Your Secret Weapon for Pitch Success.</h1>
//                     <p className="hero-subtitle">
//                         "QuickTrack.ai transforms cricket coaching. Analyze ball metrics, player stats,
//                         and gain actionable insights. Elevate your strategies and lead your team to victory."
//                     </p>

//                     {/* Buttons (Existing code - keep this) */}
//                     <div className="button-group">
//                         <Link to="/login" className="button primary">
//                             Ignite Your Strategy
//                         </Link>
//                         <Link to="/register" className="button secondary">
//                             Join the Revolution
//                         </Link>
//                     </div>

//                     {/* Scroll Indicator (Existing code - keep this) */}
//                     <div className="scroll-indicator">
//                         Scroll to Discover More <i className="fas fa-arrow-down"></i>
//                     </div>
//                 </div>
//             </section>

//             {/* Sports Logos Section */}
//             <section className="sports-logos-section">
//                 <h2>Trusted by Leagues Worldwide</h2>
//                 <p>Empowering data-driven decisions in cricket, from grassroots to professional levels.</p>
//                 <div className="logos-container">
//                     {logos.map((logo, index) => (
//                         <img key={index} src={logo} alt={`Logo ${index + 1}`} className="sport-logo" />
//                     ))}
//                 </div>
//             </section>

//             {/* Our Technologies Section (Existing code - keep this) */}
//             <section className="our-technologies">
//                 <h2>Our Technologies</h2>
//                 <p>From officiating to broadcast, all of our innovations are underpinned by our Two core technologies.</p>
//                 <div className="technologies-container">
//                     <div className="technology-card left-animation" ref={dynamicReplayRef}>
//                         <h3>Dynamic Replay</h3>
//                         <p>Uncover hidden details in every play with our multi-angle, precision-clipping replay system.</p>
//                         <img src="/images/dynamic.png" alt="Video Replay" />
//                     </div>

//                     {/* Inserted Video Card (No Border) */}
//                     <div className="technology-card video-card">
//                         <video className="feature-video" autoPlay loop muted>
//                             <source src="/videos/feature.mp4" type="video/mp4" />
//                             Your browser does not support the video tag.
//                         </video>
//                     </div>

//                     <div className="technology-card right-animation" ref={performanceTrackerRef}>
//                         <h3>Performance Tracker</h3>
//                         <p>From ballistics to biometrics: track, measure, and improve every aspect of your game.</p>
//                         <img src="/images/counter.png" alt="Counter" />
//                     </div>
//                 </div>
//             </section>

//             {/* Additional Section (Existing code - keep this or replace) */}
//             <section className="another-section">
//                 <h2>Another Section</h2>
//                 <p>This is another section on the home page.</p>
//             </section>
//         </div>
//     );
// }

// export default Home;


// import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; // Make sure this is the combined CSS file

// const videoSource = '/videos/QuickTrackbg.mp4';

// const TrustedBy = ({ logos, logoTitles }) => {
//     return (
//         <section className="sports-logos-section">
//             <h2>Trusted by Leagues Worldwide</h2>
//             <p>Empowering data-driven decisions in cricket, from grassroots to professional levels.</p>
//             <div className="logos-container">
//                 {logos.map((logo, index) => (
//                     <img key={index} src={logo} alt={`Logo ${index + 1}`} title={logoTitles[index]} className="sport-logo" />
//                 ))}
//             </div>
//         </section>
//     );
// };

// const HeroSection = () => {
//     return (
//         <section className="main-section">
//             <video className="background-video" autoPlay loop muted>
//                 <source src={videoSource} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>

//             <div className="overlay">
//                 <h1 className="hero-title">Unlock Pitch Success with AI Ball Tracking.</h1>
//                 <p className="hero-subtitle">
//                     QuickTrack.ai: Transforming Cricket with AI Ball Tracking & Umpire Tools. Analyze
//                     metrics, streamline officiating, and gain the winning edge.
//                 </p>

//                 <div className="button-group">
//                     <Link to="/login" className="button primary">
//                         Ignite Your Strategy
//                     </Link>
//                     <Link to="/register" className="button secondary">
//                         Join the Revolution
//                     </Link>
//                 </div>

//                 <div className="scroll-indicator">
//                     Scroll to Discover More <i className="fas fa-arrow-down"></i>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const FeatureTechnologiesSection = () => {
//     const videoReplayRef = useRef(null);
//     const trackRef = useRef(null);
//     const insightRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add('show');
//                     } else {
//                         entry.target.classList.remove('show');
//                     }
//                 });
//             },
//             {
//                 threshold: 0.5,
//             }
//         );

//         const observeElement = (elementRef) => {
//             if (elementRef.current) {
//                 observer.observe(elementRef.current);
//             }
//         };

//         observeElement(videoReplayRef);
//         observeElement(trackRef);
//         observeElement(insightRef);

//         return () => {
//             observer.disconnect();
//         };
//     }, []);

//     return (
//         <section className="our-technologies">
//             <h2>Our Technologies</h2>
//             <p>From officiating to broadcast, all of our innovations are underpinned by our three core technologies.</p>
//             <div className="technologies-container">
//                 <div className="technology-card tech-card-left" ref={videoReplayRef}>
//                     <div className="tech-card-inner">
//                         <h3>Video Replay</h3>
//                         <p>Our multi-angle replay tech underpins our video capture, review & clipping capabilities.</p>
//                         <img src="/images/replay.png" alt="Video Replay" />
//                     </div>
//                 </div>

//                 <div className="technology-card tech-card-center" ref={trackRef}>
//                     <div className="tech-card-inner">
//                         <h3>Track</h3>
//                         <p>Our optical tracking & camera calibration powers performance, ball & object tracking.</p>
//                         <img src="/images/dynamic.png" alt="Track" />
//                     </div>
//                 </div>

//                 <div className="technology-card tech-card-right" ref={insightRef}>
//                     <div className="tech-card-inner">
//                         <h3>Counter</h3>
//                         <p>From ballistics to biometrics: track, measure, and improve every aspect of your game.</p>
//                         <img src="/images/counter.png" alt="Insight" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// function Home() {
//     const logos = [
//         "/images/indian.png",
//         "/images/ipl.png",
//         "/images/kpl.png",
//         "/images/rajsthan.jpg",
//         "/images/uae.jpg",
//         "/images/arbain.png",
//     ];

//     const logoTitles = [
//         "Indian Premier League",
//         "IPL",
//         "Karnataka Premier League",
//         "Rajasthan Cricket Association",
//         "Emirates Cricket Board",
//         "Arbaeen Cricket League",
//     ];

//     return (
//         <div className="home-container">
//             <header className="header">
//                 <nav className="navbar">
//                     <div className="logo">QuickTrack.ai</div>
//                     <div className="nav-links">
//                         <Link to="/" className="nav-link">
//                             Home
//                         </Link>
//                         <Link to="/about" className="nav-link">
//                             About
//                         </Link>
//                         <Link to="/contact" className="nav-link">
//                             Contact
//                         </Link>
//                         <Link to="/pricing" className="nav-link">
//                             Plan & Pricing
//                         </Link>
//                     </div>
//                 </nav>
//             </header>

//             {/* Main Video Section */}
//             <HeroSection />

//             {/* Sports Logos Section */}
//             <TrustedBy logos={logos} logoTitles={logoTitles} />

//             {/* Our Technologies Section */}
//             <FeatureTechnologiesSection />

//             {/* Additional Section (Existing code - keep this or replace) */}
//             <section className="another-section">
//                 <h2>Another Section</h2>
//                 <p>This is another section on the home page.</p>
//             </section>
//         </div>
//     );
// }

// export default Home;

// import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; // Make sure this is the combined CSS file

// const videoSource = '/videos/QuickTrackbg.mp4';

// const TrustedBy = ({ logos, logoTitles }) => {
//     return (
//         <section className="sports-logos-section">
//             <h2>Trusted by Leagues Worldwide</h2>
//             <p>Empowering data-driven decisions in cricket, from grassroots to professional levels.</p>
//             <div className="logos-container">
//                 {logos.map((logo, index) => (
//                     <img key={index} src={logo} alt={`Logo ${index + 1}`} title={logoTitles[index]} className="sport-logo" />
//                 ))}
//             </div>
//         </section>
//     );
// };

// const HeroSection = () => {
//     return (
//         <section className="main-section">
//             <video className="background-video" autoPlay loop muted>
//                 <source src={videoSource} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>

//             <div className="overlay">
//                 <h1 className="hero-title">Unlock Pitch Success with AI Ball Tracking.</h1>
//                 <p className="hero-subtitle">
//                     QuickTrack.ai: Transforming Cricket with AI Ball Tracking & Umpire Tools. Analyze
//                     metrics, streamline officiating, and gain the winning edge.
//                 </p>

//                 <div className="button-group">
//                     <Link to="/login" className="button primary">
//                         Ignite Your Strategy
//                     </Link>
//                     <Link to="/register" className="button secondary">
//                         Join the Revolution
//                     </Link>
//                 </div>

//                 <div className="scroll-indicator">
//                     Scroll to Discover More <i className="fas fa-arrow-down"></i>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const FeatureTechnologiesSection = () => {
//     const videoReplayRef = useRef(null);
//     const trackRef = useRef(null);
//     const insightRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add('show');
//                     } else {
//                         entry.target.classList.remove('show');
//                     }
//                 });
//             },
//             {
//                 threshold: 0.5,
//             }
//         );

//         const observeElement = (elementRef) => {
//             if (elementRef.current) {
//                 observer.observe(elementRef.current);
//             }
//         };

//         observeElement(videoReplayRef);
//         observeElement(trackRef);
//         observeElement(insightRef);

//         return () => {
//             observer.disconnect();
//         };
//     }, []);

//     return (
//         <section className="our-technologies">
//             <h2>Our Technologies</h2>
//             <p>From officiating to broadcast, all of our innovations are underpinned by our three core technologies.</p>
//             <div className="technologies-container">
//                 <div className="technology-card tech-card-left" ref={videoReplayRef}>
//                     <div className="tech-card-inner">
//                         <h3 className="tech-title">Video Replay</h3>
//                         <p className="tech-description">Our multi-angle replay tech underpins our video capture, review & clipping capabilities.</p>
//                         <img src="/images/replay.png" alt="Video Replay" />
//                     </div>
//                 </div>

//                 <div className="technology-card tech-card-center" ref={trackRef}>
//                     <div className="tech-card-inner">
//                         <h3 className="tech-title">Track</h3>
//                         <p className="tech-description">Our optical tracking & camera calibration powers performance, ball & object tracking.</p>
//                         <img src="/images/track.png" alt="Track" />
//                     </div>
//                 </div>

//                 <div className="technology-card tech-card-right" ref={insightRef}>
//                     <div className="tech-card-inner">
//                     <h3>Counter</h3>
//                        <p>From ballistics to biometrics: track, measure, and improve every aspect of your game.</p>
//                        <img src="/images/counter.png" alt="counter" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const SectionSeparator = () => {
//     return (
//         <div className="section-separator">
//             <img src="/images/separator.png" alt="Section Separator" />
//         </div>
//     );
// };

// const UseCasesSection = () => {
//     return (
//         <section className="use-cases-section">
//             <h2>The QuickTrack.ai You Know</h2>
//             <p>Quicktrack.ai makes cricket more accurate, insightful, and data-driven for players, coaches, umpires, and fans across every level of the game.</p>
            
//         </section>
//     );
// };

// function Home() {
//     const logos = [
//         "/images/indian.png",
//         "/images/ipl.png",
//         "/images/kpl.png",
//         "/images/rajsthan.jpg",
//         "/images/uae.jpg",
//         "/images/arbain.png",
//     ];

//     const logoTitles = [
//         "Indian Premier League",
//         "IPL",
//         "Karnataka Premier League",
//         "Rajasthan Cricket Association",
//         "Emirates Cricket Board",
//         "Arbaeen Cricket League",
//     ];

//     return (
//         <div className="home-container">
//             <header className="header">
//                 <nav className="navbar">
//                     <div className="logo">QuickTrack.ai</div>
//                     <div className="nav-links">
//                         <Link to="/" className="nav-link">
//                             Home
//                         </Link>
//                         <Link to="/about" className="nav-link">
//                             About
//                         </Link>
//                         <Link to="/contact" className="nav-link">
//                             Contact
//                         </Link>
//                         <Link to="/pricing" className="nav-link">
//                             Plan & Pricing
//                         </Link>
//                     </div>
//                 </nav>
//             </header>

//             {/* Main Video Section */}
//             <HeroSection />

//             {/* Sports Logos Section */}
//             <TrustedBy logos={logos} logoTitles={logoTitles} />

//             {/* Our Technologies Section */}
//             <FeatureTechnologiesSection />

//             {/* Section Separator */}
//             <SectionSeparator />

//             {/*Use Cases Section */}
//             <UseCasesSection />

//             {/* Additional Section (Existing code - keep this or replace) */}
//             <section className="another-section">
//                 <h2>Another Section</h2>
//                 <p>This is another section on the home page.</p>
//             </section>
//         </div>
//     );
// }

// export default Home;

import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';


const videoSource = '/videos/QuickTrackbg.mp4';

const TrustedBy = ({ logos, logoTitles }) => {
    return (
        <section className="sports-logos-section">
            <h2>Trusted by Leagues Worldwide</h2>
            <p>Empowering data-driven decisions in cricket, from grassroots to professional levels.</p>
            <div className="logos-container">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Logo ${index + 1}`} title={logoTitles[index]} className="sport-logo" />
                ))}
            </div>
        </section>
    );
};

const HeroSection = () => {
    return (
        <section className="main-section">
            <video className="background-video" autoPlay loop muted>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="overlay">
                <h1 className="hero-title">Unlock Pitch Success with AI Ball Tracking.</h1>
                <p className="hero-subtitle">
                    CrickTrack.ai: Transforming Cricket with AI Ball Tracking & Umpire Tools. Analyze
                    metrics, streamline officiating, and gain the winning edge.
                </p>

                <div className="button-group">
                    <Link to="/login" className="button primary">
                        Ignite Your Strategy
                    </Link>
                    <Link to="/register" className="button secondary">
                        Join the Revolution
                    </Link>
                </div>

                <div className="scroll-indicator">
                    Scroll to Discover More <i className="fas fa-arrow-down"></i>
                </div>
            </div>
        </section>
    );
};

const FeatureTechnologiesSection = () => {
    const videoReplayRef = useRef(null);
    const trackRef = useRef(null);
    const insightRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const observeElement = (elementRef) => {
            if (elementRef.current) {
                observer.observe(elementRef.current);
            }
        };

        observeElement(videoReplayRef);
        observeElement(trackRef);
        observeElement(insightRef);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="our-technologies">
            <h2>Our Technologies</h2>
            <p>From officiating to broadcast, all of our innovations are underpinned by our three core technologies.</p>
            <div className="technologies-container">
                <div className="technology-card tech-card-left" ref={videoReplayRef}>
                    <div className="tech-card-inner">
                        <h3 className="tech-title">Video Replay</h3>
                        <p className="tech-description">Our multi-angle replay tech underpins our video capture, review & clipping capabilities.</p>
                        <img src="/images/replay.png" alt="Video Replay" />
                    </div>
                </div>

                <div className="technology-card tech-card-center" ref={trackRef}>
                    <div className="tech-card-inner">
                        <h3 className="tech-title">Track</h3>
                        <p className="tech-description">Our optical tracking & camera calibration powers performance, ball & object tracking.</p>
                        <img src="/images/track.png" alt="Track" />
                    </div>
                </div>

                <div className="technology-card tech-card-right" ref={insightRef}>
                    <div className="tech-card-inner">
                        <h3 className="tech-title">Insight</h3>
                        <p className="tech-description">Our insight tech powers data collation & aggregation, through to visualisation.</p>
                        <img src="/images/counter.png" alt="Insight" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SectionSeparator = () => {
    return (
        <div className="section-separator">
            <img src="/images/separator.png" alt="Section Separator" />
        </div>
    );
};
const SponsorSeparator = () => {
    return (
        <div className="sponsor-separator">
            <img src="/images/line.png" alt="Sponsor Separator" />
        </div>
    );
};


const UseCasesSection = () => {
    const useCaseData = [
        {
            title: "Data-Driven Batting",
            description: "Cricktrack.ai empowers batters to make informed decisions with actionable data on ball trajectory, speed, and spin. Elevate your game and dominate the scoreboard.",
            image: "/images/cricket1.png",
            logo1: "/images/1.png",
            logo2: "/images/2.png"
        },
        {
            title: "Pinpoint Bowling Insights",
            description: "Cricktrack.ai's advanced ball tracking visualizes the unseen, giving bowlers and analysts a powerful advantage in understanding and improving performance.",
            image: "/images/cricket2.png",
            logo1: "/images/3.png",
            logo2: "/images/4.png"
        },
        {
            title: "Match Coverage Reimagined",
            description: "From the ground to the screen, Cricktrack.ai transforms cricket broadcasts with visually stunning ball tracking and insightful data analysis. Enhance your coverage and captivate your audience.",
            image: "/images/cricket3.png",
            logo1: "/images/5.png",
            logo2: "/images/6.png"
        },
    ];
    


    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderInterval = useRef(null);

    useEffect(() => {
        sliderInterval.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % useCaseData.length);
        }, 5000); // Change slide every 5 seconds

        return () => {
            clearInterval(sliderInterval.current); // Clear interval on unmount
        };
    }, [useCaseData.length]);

    const nextSlide = () => {
        clearInterval(sliderInterval.current); // Clear existing interval
        setCurrentSlide((prevSlide) => (prevSlide + 1) % useCaseData.length);
        sliderInterval.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % useCaseData.length);
        }, 5000);
    };

    const prevSlide = () => {
        clearInterval(sliderInterval.current); // Clear existing interval
        setCurrentSlide((prevSlide) => (prevSlide - 1 + useCaseData.length) % useCaseData.length);
        sliderInterval.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % useCaseData.length);
        }, 5000);
    };

    return (
        <section className="use-cases-section">
            <h2>The "CrickTrack.ai" You Know</h2>
            <p>Cricktrack.ai makes cricket fairer, more engaging, and better officiated with cutting-edge ball tracking and umpire tools trusted by leagues and federations.</p>
            
            <div className="slider-container">
                <button className="slider-button prev" onClick={prevSlide}>&lt;</button>
                
                <div className="slider">
                    {useCaseData.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? "active" : ""}`}
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {/* Image */}
                            <img src={slide.image} alt={slide.title} className="slide-image" />

                            {/* Content */}
                            <div className="slide-content">
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>

                                {/* Two Logos Inside Each Container */}
                                <div className="slide-logos">
                                    <img src={slide.logo1} alt="Logo 1" className="slide-logo" />
                                    <img src={slide.logo2} alt="Logo 2" className="slide-logo" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="slider-button next" onClick={nextSlide}>&gt;</button>
            </div>

            <div className="slider-dots">
                {useCaseData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => {
                            clearInterval(sliderInterval.current); // Clear existing interval
                            setCurrentSlide(index);
                            sliderInterval.current = setInterval(() => {
                                setCurrentSlide((prevSlide) => (prevSlide + 1) % useCaseData.length);
                            }, 5000);
                        }}
                    ></span>
                ))}
            </div>
        </section>
    );
};
const TestimonialsSection = () => {
    const testimonials = [
        {
            name: " Rajesh Sharma",
            company: "Head Coach, Mumbai Cricket Academy",
            // image: "/images/client1.png",
            review: "Cricktrack.ai has revolutionized how we coach batting. The pinpoint ball tracking allows us to identify even the smallest flaws in technique, leading to significant improvements in our players' scoring ability. A game-changer for modern cricket training!",
            rating: 5
        },
        {
            name: "Priya Patel",
            company: "U19 Coach, Gujarat Cricket Association",
            // image: "/images/client2.png",
            review: "As a coach of young bowlers, Cricktrack.ai's data has been invaluable. We can now visualize each delivery, analyze spin rates, and create targeted training plans that have dramatically increased our bowlers' accuracy and wicket-taking potential.",
            rating: 4
        },
        {
            name: "Sunil Kumar",
            company: "Performance Analyst, Tamil Nadu Premier League",
            // image: "/images/client3.png",
            review: "Cricktrack.ai has transformed our team's performance analysis. With the umpire tools, we can eliminate scoring inconsistencies, and the data-driven insights help us create winning strategies for every match. It's an indispensable asset for any cricket team looking to gain an edge.",
            rating: 5
        }
    ];

    return (
        <section className="testimonials-section">
            <h2>Hear From Our Users</h2>
            <p>Discover what our customers say about CrickTrack.ai</p>
            
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className={`testimonial-card ${index === 1 ? "highlight" : ""}`} 
                    >
                        <p className="testimonial-quote">❝ {testimonial.review} ❞</p>
                        <div className="testimonial-image">
                            {/* <img src={testimonial.image} alt={testimonial.name} /> */}
                        </div>
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-company">{testimonial.company}</p>
                        <div className="testimonial-rating">
                            {"⭐".repeat(testimonial.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


function Home() {
    const logos = [
        "/images/indian.png",
        "/images/ipl.png",
        "/images/kpl.png",
        "/images/rajsthan.jpg",
        "/images/uae.jpg",
        "/images/arbain.png",
    ];

    const logoTitles = [
        "Indian Premier League",
        "IPL",
        "Karnataka Premier League",
        "Rajasthan Cricket Association",
        "Emirates Cricket Board",
        "Arbaeen Cricket League",
    ];

    return (
        <div className="home-container">
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

            {/* Main Video Section */}
            <HeroSection />

            {/* Sports Logos Section */}
            <TrustedBy logos={logos} logoTitles={logoTitles} />

            <SponsorSeparator />

            {/* Our Technologies Section */}
            <FeatureTechnologiesSection />

            {/* Section Separator */}
            <SectionSeparator />

            {/* Use Cases Section */}
            <UseCasesSection />

            <TestimonialsSection />
            <Footer />
        </div>
    );
}

export default Home;