import { Card, Form, Button } from 'react-bootstrap';
import './form-pelicula.css';
import GridPelicula from '../GridPelicula/GridPelicula';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const FormPelicula = () => {
  let peliculaLocalstorage =
    JSON.parse(localStorage.getItem('listaPeliculas')) || [];
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [genero, setGenero] = useState('');

  const [listaPeliculas, setListaPeliculas] = useState(peliculaLocalstorage);
  const [alerta, setAlerta] = useState('');

  useEffect(() => {
    localStorage.setItem('listaPeliculas', JSON.stringify(listaPeliculas));
  }, [listaPeliculas]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if ([nombre, descripcion, genero].includes('')) {
      mostrarAlerta('Completar todos los datos');
      return;
    }
    agregarPelicula({
      nombre,
      descripcion,
      genero,
    });
  };

  const agregarPelicula = (pelicula) => {
    setListaPeliculas([...listaPeliculas, pelicula]);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se creó correctamente la nueva pelicula',
      showConfirmButton: false,
      timer: 1500,
    });
    setNombre('');
    setDescripcion('');
    setGenero('');
  };

  //función para mostrar alerta
  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);

    setTimeout(() => {
      setAlerta('');
    }, 3000);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-3 text-uppercase display-6 fw-bold text-center">
            Administrar Peliculas
          </Card.Title>
          <Form onSubmit={handleSubmit} className="container-wrapper">
            <Form.Label className="display-6 mb-3 mt-1">
              <em>Ingrese nueva pelicula:</em>
            </Form.Label>
            {alerta && <Alert variant="danger">{alerta}</Alert>}
            <Form.Group className="mb-4" controlId="nombrePelicula">
              <Form.Label className="fw-bold">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre de Película"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="descripcionPelicula">
              <Form.Label className="fw-bold">Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción de la Película"
                value={descripcion}
                onChange={(event) => setDescripcion(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="generoPelícula">
              <Form.Label className="fw-bold">Género</Form.Label>
              <Form.Select
                className="mb-4"
                aria-label="generoSelect"
                value={genero}
                onChange={(event) => setGenero(event.target.value)}
              >
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
      <GridPelicula />
    </>
  );
};

export default FormPelicula;
