import React, { useState } from 'react';
import './Pricing.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import your logo image

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    // Pricing data with both monthly and annual options
    const plans = [
        {
            name: "Basic",
            monthly: {
                price: 0,
                isCurrent: true
            },
            annual: {
                price: 0,
                isCurrent: true
            },
            features: ["Basic access", "Limited storage", "Email support"]
        },
        {
            name: "Standard",
            monthly: {
                price: 12,
                isCurrent: false
            },
            annual: {
                price: 9,
                isCurrent: false
            },
            features: ["Full access", "50GB storage", "Priority support", "Advanced analytics"]
        },
        {
            name: "Professional",
            monthly: {
                price: 24,
                isCurrent: true
            },
            annual: {
                price: 19,
                isCurrent: true
            },
            features: ["Unlimited access", "200GB storage", "24/7 support", "Custom integrations"]
        }
    ];

    const handleBillingChange = (cycle) => {
        setBillingCycle(cycle);
    };

    // Calculate annual savings
    const calculateSavings = (monthlyPrice, annualPrice) => {
        const monthlyCost = monthlyPrice * 12;
        const annualCost = annualPrice * 12;
        const savings = ((monthlyCost - annualCost) / monthlyCost * 100).toFixed(0);
        return savings;
    };

    return (
        <div className="overflow">
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

            <div className="pricing-container">
                <div className="pricing-card">
                    <div className="pricing-header">
                        <h2 className="pricing-title">Subscription Plans</h2>
                        <p className="pricing-subtitle">
                            Upgrade to access, User Roles and Permissions, Mobile accessibility, Integration
                            with AI Tools and Standard Customer support.
                        </p>

                        <div className="billing-toggle">
                            <button
                                className={`billing-button ${billingCycle === 'monthly' ? 'active' : ''}`}
                                onClick={() => handleBillingChange('monthly')}
                            >
                                Monthly
                            </button>
                            <button
                                className={`billing-button ${billingCycle === 'annual' ? 'active' : ''}`}
                                onClick={() => handleBillingChange('annual')}
                            >
                                Annual
                            </button>
                        </div>
                    </div>

                    <div className="pricing-plans">
                        {plans.map((plan, index) => (
                            <div key={index} className={`plan-card ${index === 1 ? 'highlighted' : ''}`}>
                                {billingCycle === 'annual' && plan[billingCycle].price > 0 && (
                                    <div className="discount-badge">
                                        Save {calculateSavings(plan.monthly.price, plan.annual.price)}%
                                    </div>
                                )}
                                <h3 className="plan-name">{plan.name}</h3>
                                <div className="plan-price">
                                    <span className="price-currency">$</span>
                                    <span className="price-amount">{plan[billingCycle].price}</span>
                                    <div className="price-period">
                                        <div>Per user</div>
                                        <div>Per {billingCycle === 'monthly' ? 'month' : 'month, billed annually'}</div>
                                    </div>
                                </div>

                                {index === 1 ? (
                                    <button className="plan-button select">Select Plan</button>
                                ) : (
                                    <button className="plan-button current">Current Plan</button>
                                )}
                            </div>
                        ))}
                    </div>

                    <p className="secure-payment">100% secure payment method with money back guarantee.</p>

                    <button className="upgrade-button">Upgrade now</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Pricing;