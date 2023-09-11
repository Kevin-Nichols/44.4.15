import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

// Displays an index of Pokemon
const Pokedex = (props) => {
  let winnerAlert = null;
  if (props.isWinner) {
    winnerAlert = <p className="Pokedex-winner">THIS HAND WINS!</p>;
  }

  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {props.pokemon.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total Exp: {props.exp}</h4>
      {winnerAlert}
    </div>
  )
}

export default Pokedex;