import { NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'
import pokebola from "../poke-icon.png"

export default function Navegacion() {

const setActiveClass = ({isActive}) => (isActive ? "active" : "noActive")

return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
            <Container className="icono">
                    <Navbar.Brand><img src={pokebola} style={{width:"60px", height:"60px"}}></img>
                    </Navbar.Brand>
            </Container>
            <Container className="menu">
                <Container className="direcciones">
                <NavLink className={ setActiveClass } to="/">
                <span>Home</span>
                </NavLink>
                <NavLink className={ setActiveClass } to="/pokemones">
                <span>Pokemones</span>
                </NavLink>
                </Container>
            </Container>
        </Container>
        </Navbar>
    </div>
)
}