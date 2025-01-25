import React from 'react';
import './Contact.css';
import jungle_trekking from './images/jungle_trekking.jpg';

const Contact = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <img src={jungle_trekking} alt="Jungle Trekking" className="w-100" />
                <div 
                    data-aos="fade-up"  
                    data-aos-anchor-placement="center-bottom"
                    style={{ fontWeight: 'bold' }}
                >
                    Contact Us for more information
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Get in Touch</h2>
                    <form action="#" method="post">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="name" 
                                    placeholder="Your Name" 
                                    required 
                                />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name="email" 
                                    placeholder="Your Email" 
                                    required 
                                />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input 
                                    type="tel" 
                                    className="form-control" 
                                    name="phone" 
                                    placeholder="Your Phone" 
                                    required 
                                />
                            </div>
                            <div className="col-md-12 mb-4">
                                <textarea 
                                    className="form-control" 
                                    name="message" 
                                    rows="5" 
                                    placeholder="Your Message" 
                                    required
                                ></textarea>
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
