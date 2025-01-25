import React from 'react';
import './Home.css';  // Assuming you have a CSS file for the styles.
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TbChristmasTree } from "react-icons/tb";
import { FaLeaf } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import environment from "./images/environment.jpg";
import env2 from "./images/env2.jpg";
import raincarousel from "./images/rain.jpg";
import istock from "./images/istockphoto.jpg";
import tribals from "./images/tribals.jpg";
import pexels from "./images/pexels-tomfisk-2739664.jpg";





const Home = () => {
  return (
    <div>
      
      

      {/* Carousel */}
      <header id="specials" className="carousel slide vh-100" data-bs-ride="carousel">
        <div className="carousel-inner h-100 img-fluid">
          <div className="carousel-item active">
            <img src={environment} className="d-block w-100 h-100" alt="Special 1" style={{ objectFit: 'cover' }} />
           
          </div>
          <div className="carousel-item">
            <img src={env2} className="d-block w-100 h-100" alt="Special 2" style={{ objectFit: 'cover' }} />
            
          </div>
          <div className="carousel-item">
            <img src={raincarousel} className="d-block w-100 h-100" alt="Special 3" style={{ objectFit: 'cover' }} />
            
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#specials" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#specials" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </header>

      {/* Marquee Section */}
      <div className="marquee text-white">
        <div className="container-fluid">
          <marquee><h2>Register Now and Get 50% Off on Your First Trip.</h2></marquee>
        </div>
      </div>

      {/* Video Section */} 
      <div className="video">
        <div className="container-fluid">
          <center><h2>Discover the Western Ghats, Discover Yourself</h2></center>
          <center><p>Enjoy the Wayanad rainforest and explore the jungle.</p></center>
         
          <center><button className="video-buttons text-white" href="#">Watch the video</button></center>
      
        </div>
      </div> 

      {/* Cards Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-lg border-0">
              <div className="card-header p-0">
                <img src={istock} alt="A Spiritual Retreat" className="img-fluid card-img-top" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">A Spiritual Retreat</h5>
                <p className="card-text">Imagine yourself staying in an Indigenous-owned lodge deep in the rainforest, engaging in activities such as rainforest hikes, river trips, and shamanic ceremonies.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-lg border-0">
              <div className="card-header p-0">
                <img src={istock} alt="A Spiritual Retreat" className="img-fluid card-img-top" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Beyond Ecotourism</h5>
                <p className="card-text">Not only will your soul be enriched, but you will be supporting the people 
                defending the Amazon from oil, logging, and mining. Explore nature's richness.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-lg border-0">
              <div className="card-header p-0">
                <img src={tribals} alt="A Spiritual Retreat" className="img-fluid card-img-top" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">A Unique Partnership</h5>
                <p className="card-text">Wayanad is in partnership with the Kerala tribes to protect their land and culture. 
                Visit and learn from them to carry their knowledge and message home.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      

      <div className="lightgreen">
      <div className="container-fluid">
        <center>
          <h1 className="text-white margins">Don't Miss Your Journey of a Lifetime</h1>
        </center>
        <p className="text-white">
          Get more information about this unique and unparalleled experience, plus updates about upcoming trips delivered to your inbox.
        </p>
        <center>
          <button type="button" className="btn btn-light btn-lg">
            <a href="video.mp3" style={{ textDecoration: 'none' }} className="text-dark">
              Tell me more
            </a>
          </button>
        </center>
      </div>
    </div>


    <div className="container-fluid">
      <div className="image-strip position-relative">
        <img 
          src={pexels} 
          alt="Special Offer" 
          className="img-fluid w-100" 
        />
      </div>
     
    </div>





     
    </div>
  );
};

export default Home;
