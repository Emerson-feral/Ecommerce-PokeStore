/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPokemons } from '../../redux/actions/actionCreators';
import './style/LootBox-style.css';

function LootBox() {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons);
  const loggedUser = useSelector(({ user }) => user);

  useEffect(() => {
    if (!pokemons?.length) dispatch(loadPokemons(loggedUser));
  }, []);

  let currentPokemon;
  if (pokemons.pokemons !== null) {
    const randomPokemon = Math.floor(Math.random() * pokemons.pokemons.length);
    currentPokemon = pokemons[randomPokemon];
  }

  return (
    <>
      <div className="container-title">
        <h2>Mystery box</h2>
      </div>
      <div className="lootBox">
        <Link to={`/detail/${currentPokemon?._id}`}>
          <img className="lootBox-image" src="https://i.ibb.co/HggfnHV/who-Ist-This-Pokemon.webp" alt="who-Ist-This-Pokemon" />
        </Link>
      </div>
    </>
  );
}

export default LootBox;
