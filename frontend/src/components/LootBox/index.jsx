/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPokemons } from '../../redux/actions/actionCreators';
import './style/LootBox-style.css';

function LootBox() {
  const dispatch = useDispatch();
  const allPokemons = useSelector(({ pokemons }) => ({ pokemons }));
  useEffect(() => {
    if (!allPokemons.pokemons.length)dispatch(loadPokemons());
  }, []);

  let currentPokemon;
  if (allPokemons.pokemons !== null) {
    const randomPokemon = Math.floor(Math.random() * allPokemons.pokemons.length);
    currentPokemon = allPokemons.pokemons[randomPokemon];
  }

  return (
    <>
      <div className="container-title">
        <h2>Mystery box</h2>
      </div>
      <div className="lootBox">
        <Link to={`/detail/${currentPokemon?._id}`}>
          <img src="https://i.ibb.co/HggfnHV/who-Ist-This-Pokemon.webp" alt="who-Ist-This-Pokemon" />
        </Link>
      </div>
      ;
    </>
  );
}

export default LootBox;
