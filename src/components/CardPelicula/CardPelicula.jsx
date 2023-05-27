import { Card, Col } from 'react-bootstrap';
import './card-pelicula.css';

const CardPelicula = ({ pelicula }) => {
  return (
    <Col md={6} lg={4} className="mb-3">
      <Card>
        <Card.Img variant="top" src="/src/assets/img/imgmodelopelicula.jpg" />
        <Card.Body>
          <Card.Title>{pelicula.nombre}</Card.Title>
          <Card.Text>{pelicula.descripcion}</Card.Text>
          <Card.Footer className="text-muted text-center fw-bold">
            <span className=" badge text-bg-primary p-2 my-1">
              {pelicula.genero}
            </span>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardPelicula;
