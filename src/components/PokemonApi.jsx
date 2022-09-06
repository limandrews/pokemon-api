import React, { useState } from 'react'

const PokemonApi = () => {
    // STATE
    const [pokemons, setPokemons] = useState([])

    // BUTTON HANDLER
    const buttonHandler = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(finalResponse => setPokemons(finalResponse.results))
    }

return (
    <div>
        <button onClick={buttonHandler}>Fetch</button>

        {/* display pokemons */}
        {
            pokemons.map((pokemon) => {
                return (
                    (pokemon) ?
                    <>
                        <p>{pokemon.name}</p>
                    </> : <h4>Loading...</h4>
                )
            })
        }
    </div>
)
}

export default PokemonApi