import { Card, Form, Button } from 'react-bootstrap';
import './form-pelicula.css';

const FormPelicula = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-3 text-uppercase display-6 fw-bold text-center">
            Administrar Peliculas
          </Card.Title>
          <Form className="container-wrapper">
            <Form.Label className="display-6 mb-3 mt-1">
              <em>Ingrese nueva pelicula:</em>
            </Form.Label>
            <Form.Group className="mb-4" controlId="nombrePelicula">
              <Form.Label className="fw-bold">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre de Película"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="descripcionPelicula">
              <Form.Label className="fw-bold">Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="generoPelícula">
              <Form.Label className="fw-bold">Género</Form.Label>
              <Form.Select className="mb-4" aria-label="generoSelect">
                <option>Selecciione una opción:</option>
                <option value="Comedia">Comedia</option>
                <option value="Drama">Drama</option>
                <option value="Infantil">Infantil</option>
              </Form.Select>
            </Form.Group>

            <Button variant="info" type="submit" className="my-2 w-100">
              Agregar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default FormPelicula;
