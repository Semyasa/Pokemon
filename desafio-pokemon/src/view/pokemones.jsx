import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Pokemon from "../components/pokemon";
import Buscador from "../components/buscador";

export default () => {

  return (
    <Container className="text-center">

        <Buscador />

    </Container>
  );
};
