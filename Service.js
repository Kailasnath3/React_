import React from "react";
import "./Service.css";
import "bootstrap/dist/css/bootstrap.min.css";
import luxury from "./images/luxury_tree_edited.jpg";
import ranger from "./images/rangerwood-machan-jungle.jpg";
import figtree from "./images/FigTree-12-HD.jpg";
import guidednature from "./images/guided_nature.jpg";
import conservation from "./images/conservation.jpg";
import photoveg from "./images/photoveg.jfif";
import foresttrek from "./images/forest_trek.jpg";
import croos from "./images/crooss.jfif";
import greenearth from "./images/green_earth.avif";
import istockphoto from "./images/istockphoto-1412012308-612x612.jpg";
import wildweb from "./images/wild.webp";

const Service = () => {
  return (
    <div>
      {/* Carousel */}
      <header id="servicesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={luxury} className="d-block w-100" alt="Forest Hike" />
            
          </div>
          <div className="carousel-item">
            <img src={ranger} className="d-block w-100" alt="Tree House" />
           
          </div>
          <div className="carousel-item">
            <img src={figtree} className="d-block w-100" alt="Fig Tree" />
           
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#servicesCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#servicesCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </header>

      {/* Services Section */}
      <section className="services-section py-5">
        <div className="container">
          <div className="row g-4">
            {/* Service Cards */}
            {[
              {
                img: guidednature,
                title: "Guided Forest Tours",
                text: "Explore the rainforest with expert guides and learn about the rich biodiversity.",
              },
              {
                img: conservation,
                title: "Conservation Projects",
                text: "Join our initiatives for reforestation and wildlife protection.",
              },
              {
                img: conservation,
                title: "Educational Programs",
                text: "Learn about the importance of rainforests through interactive workshops.",
              },
            ].map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow">
                  <img src={service.img} className="card-img-top" alt={service.title} />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trekking Section */}
      <section className="trekking-section py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* Trekking Cards */}
            {[
              {
                img: photoveg,
                title: "Mountain Trek",
                text: "A thrilling trek through the mountains with breathtaking views. Duration: 4-6 hours",
                price: "$50 per person",
              },
              {
                img: foresttrek,
                title: "Forest Exploration",
                text: "Explore the dense forest trails, learning about flora and fauna. Duration: 3 hours",
                price: "$30 per person",
              },
              {
                img: croos,
                title: "River Crossing Trek",
                text: "A unique trekking experience with river crossings and jungle trails. Duration: 5 hours",
                price: "$60 per person",
              },
            ].map((trek, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow">
                  <img src={trek.img} className="card-img-top trekking-img" alt={trek.title} />
                  <div className="card-body">
                    <h5 className="card-title">{trek.title}</h5>
                    <p className="card-text">{trek.text}</p>
                    <p className="card-price">{trek.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="partners-section py-5">
        <div className="container">
          <div className="row g-4">
            {/* Partner Cards */}
            {[
              {
                img: greenearth,
                title: "Green Earth Foundation",
                text: "A non-profit organization dedicated to sustainable environmental practices.",
              },
              {
                img: istockphoto,
                title: "Eco-Friendly Treks",
                text: "We collaborate with eco-friendly trekking companies to ensure minimal environmental impact.",
              },
              {
                img: wildweb,
                title: "Wildlife Conservationists",
                text: "Working with local wildlife organizations to protect endangered species in the forest.",
              },
            ].map((partner, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card text-center bg-light shadow">
                  <img
                    src={partner.img}
                    className="card-img-top"
                    alt={partner.title}
                    style={{ height: "235px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{partner.title}</h5>
                    <p className="card-text">{partner.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
