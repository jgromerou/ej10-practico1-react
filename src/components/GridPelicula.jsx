import { Card, Row, Col } from 'react-bootstrap';
import CardPelicula from './CardPelicula/CardPelicula';

const GridPelicula = ({ listaPeliculas }) => {
  return (
    <>
      <Card className="mt-3">
        <Card.Title className="mt-4 text-uppercase display-6 fw-bold text-center">
          Administra las películas aquí
        </Card.Title>
        <Row className="my-4 px-3">
          {listaPeliculas.map((pelicula, index) => (
            <CardPelicula key={index} pelicula={pelicula} />
          ))}
        </Row>
      </Card>
    </>
  );
};

export default GridPelicula;
