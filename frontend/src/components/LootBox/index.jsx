/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPokemons } from '../../redux/actions/actionCreators';
import './style/LootBox-style.css';

function LootBox({ pokemons, dispatch }) {
  useEffect(() => {
    if (!pokemons.length)dispatch(loadPokemons());
  }, []);

  let currentPokemon;
  if (pokemons !== null) {
    const randomPokemon = Math.floor(Math.random() * pokemons.length);
    currentPokemon = pokemons[randomPokemon];
  }

  return (
    <>
      <div className="lootBox">
        <Link to={`/detail/${currentPokemon?._id}`}>
          <img src="https://i.ibb.co/HggfnHV/who-Ist-This-Pokemon.webp" alt="who-Ist-This-Pokemon" />
        </Link>
      </div>
      ;
    </>
  );
}

function mapStateToProps({ pokemons }) {
  return { pokemons };
}

export default connect(mapStateToProps)(LootBox);
