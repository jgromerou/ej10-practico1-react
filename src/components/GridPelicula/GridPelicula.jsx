import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import './grid-pelicula.css';

const GridPelicula = () => {
  return (
    <>
      <Card className="mt-3">
        <Card.Title className="mt-4 text-uppercase display-6 fw-bold text-center">
          Administra las películas aquí
        </Card.Title>
        <Row className="my-4 px-3">
          <Col md={6} lg={4} className="mb-3">
            <Card>
              <Card.Img
                variant="top"
                src="/src/assets/img/imgmodelopelicula.jpg"
              />
              <Card.Body>
                <Card.Title>Nombre Pelicula</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Footer className="text-muted text-center fw-bold">
                  <span className=" badge text-bg-primary p-2 my-1">
                    Género Película
                  </span>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card>
              <Card.Img
                variant="top"
                src="/src/assets/img/imgmodelopelicula.jpg"
              />
              <Card.Body>
                <Card.Title>Nombre Pelicula</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Footer className="text-muted text-center fw-bold">
                  <span className=" badge text-bg-primary p-2 my-1">
                    Género Película
                  </span>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default GridPelicula;
