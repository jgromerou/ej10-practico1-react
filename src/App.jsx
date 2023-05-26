import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import FormPelicula from './components/FormPelicula/FormPelicula';

function App() {
  return (
    <>
      <Container className="paginaPrincipal my-5">
        <FormPelicula />
      </Container>
      <Footer />
    </>
  );
}

export default App;
