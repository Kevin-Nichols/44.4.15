import React from "react";
import Pokedex from "./Pokedex";

const Pokegame = (props) => {
  let handOne = [];
  let handTwo = [...props.pokemon];

  while (handOne.length < handTwo.length) {
    // pick a random pokemon idx from handTwo and add it to handOne.
    let randomIdx = Math.floor(Math.random() * handTwo.length);
    let randomPoke = handTwo.splice(randomIdx, 1)[0];
    handOne.push(randomPoke);
  }

  let expOne = handOne.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let expTwo = handTwo.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={handOne} exp={expOne} isWinner={expOne > expTwo} />
      <Pokedex pokemon={handTwo} exp={expTwo} isWinner={expTwo > expOne} />
    </div>
  );
}

Pokegame.defaultProps = {
  pokemon: [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
};

export default Pokegame;