// Footer.js
import React from 'react';
import './Footer.css';
import { FaLeaf, FaFacebook, FaGoogle, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-custom custom-margin-footer w-100">
      <div className="container-fluid">
        <div className="row text-center text-md-left">
          <div className="col-12 col-md-3 ms-auto mt-4">
            <h1 className="text-white">
              <FaLeaf style={{ color: 'rgb(19, 232, 19)', marginTop: '20px' }} />
              Forest Expedition
            </h1>
          </div>
          <div className="col-12 col-md-3 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold custom-color-footer">Resources</h5>
            <p className="text-white">Finances</p>
            <p className="text-white">Related Topics</p>
          </div>
          <div className="col-12 col-md-3 mx-auto mt-3">
            <h5 className="font-weight-bold mb-4 custom-color-footer">Get to Know Us</h5>
            <p className="text-white"><a href="#" className="text-white">Blog</a></p>
            <p className="text-white"><a href="#" className="text-white">News</a></p>
            <p className="text-white"><a href="#" className="text-white">Meet Our Team</a></p>
          </div>
          <div className="col-12 col-md-3 mx-auto mt-3">
            <h5 className="font-weight-bold mb-4 custom-color-footer">Connect with Us</h5>
            <p className="text-white"><a href="#" className="text-white">Our Main Address</a></p>
            <p className="text-white"><a href="#" className="text-white">+91890345671</a></p>
            <p className="text-white"><a href="#" className="text-white">Hilite Business Park</a></p>
          </div>
        </div>
        <hr className="mb-4" style={{ borderColor: '#fff' }} />
        <div className="row align-items-center">
          <p className="text-white text-center w-100">
            Copyright &copy; 2024 <a href="#" className="text-decoration-none"><strong className="custom-color-footer">Forest Expedition</strong></a>
          </p>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><FaFacebook /></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><FaGoogle /></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><FaYoutube /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
