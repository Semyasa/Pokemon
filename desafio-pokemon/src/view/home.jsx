import { Container } from "react-bootstrap";
import pikachu from "../pikachu.png"

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido maestro Pokemón 
      </h1>
      <img className="pt-5" src={pikachu} style={{width:"380px", height:"380px"}}></img>

    </Container>
  );
};
