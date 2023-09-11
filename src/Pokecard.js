import React from 'react';
import './Pokecard.css';

const IMG_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

//Shows a single Pokemon, with their name, image, and type.
const Pokecard = (props) => {
  let img = `${IMG_API}${props.id}.png`;

  return (
    <div className="Pokecard">
      <div className="Pokecard-name">{props.name}</div>
      <img className="Pokecard-img" src={img} alt=""></img>
      <div className="Pokecard-info">Type: {props.type}</div>
      <div className="Pokecard-info">EXP: {props.exp}</div>
    </div>
  );
}

export default Pokecard;