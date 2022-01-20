import React, { useState } from "react";

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }

    return(
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon!</button>
            {pokemon.map((pokemon, idx) => {
                return(
                    <div key={idx}>{pokemon.name}</div>
                )
            })}
        </div>
    )
}

export default Pokemon;