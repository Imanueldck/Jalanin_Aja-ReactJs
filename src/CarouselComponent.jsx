import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/210/2017/11/05101453/sunrise-candi-borobudur.jpg"
          alt="First slide"
          style={{ maxWidth: "100%", maxHeight: "800px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://i2.wp.com/www.infobudaya.net/wp-content/uploads/2018/02/candi-prambanan.jpg?fit=3840%2C2160" alt="Second slide" style={{ maxWidth: "100%", maxHeight: "800px", objectFit: "cover" }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://expatlifeindonesia.com/wp-content/uploads/2020/10/sutirta-budiman-DxmBSgUYKis-unsplash.jpg  " alt="Third slide" style={{ maxWidth: "100%", maxHeight: "800px", objectFit: "cover" }} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
