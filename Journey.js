import React , { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { motion } from 'framer-motion';

import './Journey.css';
import kat from './images/kat.jpg';
import jef from './images/jefferson.jpg';
import rain from './images/rain.jpg';
import nintysix from  './images/1996.jfif';
import manytrees from './images/many_trees.jpg';
import grouphd from './images/grouphd.avif';
import education50 from './images/education__50.jpg';




const Journey = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);




  return (
    <div className="journey-container">
      {/* Specials Carousel */}
      <header id="specials" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={kat} className="d-block w-100" alt="Special 1" />
            
          </div>
          <div className="carousel-item">
            <img src={jef} className="d-block w-100" alt="Special 2" />
           
          </div>
          <div className="carousel-item">
            <img src={rain} className="d-block w-100" alt="Special 3" />
            
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#specials" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#specials" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </header>

      {/* Marquee Section */}
      <div className="marquee">
        <div className="container">
          <marquee><h2>Register Now and Get 50% Off on Your First Trip.</h2></marquee>
        </div>
      </div>

      {/* Video Section */}
     <div className="green-video">
        <div className="container">
            <div className="video-content">
              <div className="video-container">
                <video controls>
                  <source src="images/videoplayback.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-container">
                   <h2 className="forest-heading">Forest Expedition</h2>
               <div data-aos="zoom-in-left">
                    <p>
                      Join us as we embark on a journey to restore the heart of the
                      rainforest. You will experience a whole new adventure with our team.
                      Make it a memorable trip.
                   </p>
               </div>
             </div>
           </div>
         </div>
       </div>

      {/* Card Section */}
<section className="card-section py-5">
  <div className="container">
    <div className="row">
      <motion.div
        className="col-md-3 mb-4"
        whileHover={{ scale: 1.1 }} // Card scales slightly on hover
        initial={{ opacity: 0, y: 50 }} // Cards start from below and fade in
        animate={{ opacity: 1, y: 0 }} // Cards animate to their normal position
        transition={{ duration: 0.5 }}
      >
        <div className="card equal-height">
          <img src={nintysix} className="card-img-top" alt="Origin of Forest Expedition" />
          <div className="card-body">
            <h5 className="card-titles">Origin of Forest Expedition</h5>
            <p className="card-text">
              The Forest Expedition began as a small initiative to raise awareness about the importance of reforestation and conservation...
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="col-md-3 mb-4"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }} // Add delay for staggered animation
      >
        <div className="card equal-height">
          <img src={manytrees} className="card-img-top" alt="Accomplishments" />
          <div className="card-body">
            <h5 className="card-titles">Accomplishments</h5>
            <p className="card-text">
              From planting over 1 million trees to creating sustainable habitats for wildlife...
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="col-md-3 mb-4"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="card equal-height">
          <img src={grouphd} className="card-img-top" alt="Our Team" />
          <div className="card-body">
            <h5 className="card-titles">Our Team</h5>
            <p className="card-text">
              Our dedicated team of environmentalists, scientists, and volunteers work tirelessly to achieve our reforestation goals...
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="col-md-3 mb-4"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="card equal-height">
          <img src={education50} className="card-img-top" alt="Jobs & Internships" />
          <div className="card-body">
            <h5 className="card-titles">Jobs & Internships</h5>
            <p className="card-text">
              Are you passionate about the environment? Join our team! We offer various job opportunities and internships...
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Journey;
