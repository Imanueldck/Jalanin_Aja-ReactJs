import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import "./Body.css";
import "./Journey.css";

const BodyComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          {/* Home section */}
          <section id="home">
            <h1>Welcome to Our Travel Agency</h1>
            <p>Explore the world with our travel services and packages.</p>
          </section>
        </Col>
      </Row>
      <Row className="featurette">
        <h2>About Us</h2>
        <Col md={7}>
          <h3 className="featurette-heading fw-normal lh-1">
            Temukan Petualanganmu <span className="text-body-secondary">Bersama Jalanin Aja</span>
          </h3>
          <p className="lead">Jalanin Aja, perusahaan yang bersemangat dalam menghadirkan pengalaman perjalanan yang tak terlupakan dengan layanan terbaik dan destinasi yang menakjubkan.</p>
        </Col>
        <Col md={5}>
          <img
            src="https://live.staticflickr.com/3124/2411037043_e0f7a14ff2_b.jpg"
            alt="Placeholder"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </Col>
      </Row>

      <section className="journey__container">
        <div className="section__container">
          <h2 className="section__title">Mulai Petualanganmu</h2>
          <p className="section__subtitle">Destinasi yang paling banyak dicari pada bulan Maret</p>
          <Row className="journey__grid">
            <Col md={4}>
              <div className="destination__card">
                <img src="https://i.imgur.com/VGZSYpi.jpeg" alt="destination" />
                <div className="destination__name">
                  <i className="ri-map-pin-2-fill"></i>
                  <span>Candi Borobudur, Jawa Tengah</span>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="destination__card">
                <img src="https://i.imgur.com/SR41YMK.jpeg" alt="destination" />
                <div className="destination__name">
                  <i className="ri-map-pin-2-fill"></i>
                  <span>Candi Prambanan, Yogyakarta</span>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="destination__card">
                <img src="https://i.imgur.com/vRjm6rg.jpeg" alt="destination" />
                <div className="destination__name">
                  <i className="ri-map-pin-2-fill"></i>
                  <span>Raja Ampat, Papua Barat</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <Row>
        <Col>
          {/* Services section */}
          <section id="services">
            <h2>Our Services</h2>
            <p>Explore our range of travel services including flight bookings, hotel reservations, tour packages, and more.</p>
            {/* Add cards to display service offerings */}
            <Card>
              <Card.Body>
                <Card.Title>Flight Bookings</Card.Title>
                <Card.Text>Explore and book flights to your desired destinations.</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Hotel Reservations</Card.Title>
                <Card.Text>Find and reserve accommodations for your travels.</Card.Text>
              </Card.Body>
            </Card>
            {/* Add more cards for other services */}
          </section>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Contact section */}
          <section id="contact">
            <h2>Contact Us</h2>
            <p>Get in touch with us for inquiries, bookings, or collaborations.</p>
            {/* Add contact information */}
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
            {/* Add contact form if needed */}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default BodyComponent;
