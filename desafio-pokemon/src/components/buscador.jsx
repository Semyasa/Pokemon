import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';


export default function Home() {

const [id, setId] = useState("");
const [pokemones, setPokemones] = useState([]);

const navigate = useNavigate();

const irAPersonajes = () => {
    navigate(`/pokemones/${id}`);
}

useEffect(() => {
    consultarApi()
}, [])

//Función que lee API
const consultarApi = async () => {

    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    const data2 = data.results
    const dataOrdenada = data2.sort((a, b) => a.name.localeCompare(b.name))
    setPokemones(dataOrdenada)
}

return (

<div className="mt-5">
<h1>Selecciona un Pokemon</h1>

    <div className="seleccionador">
        <Form.Control as="select" style={{width:"200px"}} onChange={({ target }) => setId(target.value)}>

        <option value="">Pokemones</option>
        {pokemones.map(poke => <option key={poke.name} value={poke.name}>{poke.name}</option>)}

        </Form.Control>
    </div>
<Button variant="dark" onClick={ irAPersonajes }>Ver Detalle</Button>
</div>

);
}