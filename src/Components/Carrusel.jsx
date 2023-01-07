import Carousel from 'react-bootstrap/Carousel';
import './CSS/Home.css'

export default function Carrusel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://d2r9epyceweg5n.cloudfront.net/stores/057/265/products/9302-blanco-t011-3e442d997f08533e5b16262115441280-1024-1024.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://d2r9epyceweg5n.cloudfront.net/stores/057/265/products/9302-blanco-t011-3e442d997f08533e5b16262115441280-1024-1024.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://d2r9epyceweg5n.cloudfront.net/stores/057/265/products/9302-blanco-t011-3e442d997f08533e5b16262115441280-1024-1024.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
