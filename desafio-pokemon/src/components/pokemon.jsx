import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Personajes() {
    const { id } = useParams()
    const [infoPersonaje, setPersonaje] = useState({})
    const [statsPersonaje, setStatsPersonaje] = useState([])
    const [fotoPersonaje, setFotoPersonaje] = useState({})

    useEffect(() => {

        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        fetch(url).then(resp => resp.json())
        .then(data => {
            return setPersonaje(data), setStatsPersonaje(data.stats), setFotoPersonaje(data.sprites.other.dream_world.front_default)
        })

    }, [id])

    return (
    <div className="contenedor">
        <div className="pokemon">
            <div className="fotoPoke">
        <img src={fotoPersonaje} style={{width:"380px", height:"380px"}}/>
            </div>
            <div className="descripcionpoke">
            <h1><strong>{infoPersonaje.name}</strong></h1>
            <ul>
            {statsPersonaje.map(pokepoke => <li key={pokepoke.stat.name}>{pokepoke.stat.name}: {pokepoke.base_stat}</li>)}
            </ul>
            </div>
        </div>
    </div>
    );
    }