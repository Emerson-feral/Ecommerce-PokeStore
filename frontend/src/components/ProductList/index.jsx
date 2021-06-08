/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPokemons } from '../../redux/actions/actionCreators';
import './style/ProductList-style.css';

function ProductList({ pokemons, dispatch, user }) {
  const [typePokemon, setTypePokemon] = useState(null);
  useEffect(() => {
    if (!pokemons.length)dispatch(loadPokemons(user));
  }, []);

  function handleClickFilter(event) {
    setTypePokemon(event);
  }

  const uniqueType = [...new Set(pokemons?.map((item) => item.type))];

  return (
    <>
      <div className="filter-container">
        <select className="filter-container__select" onChange={(e) => handleClickFilter(e.target.value)}>
          <option>Type</option>
          {
                uniqueType?.map((type) => <option value={type}>{type}</option>)
              }
        </select>
        <button className="filter-container__button" type="button" onClick={() => setTypePokemon(null)}>Clear</button>
      </div>
      <div className="yesOrNo">
        {
          !typePokemon
            ? (
              <ul title="pokemonList" className="pokemonlist-container">
                {
                  pokemons.map((pokemon) => (
                    <Link to={`detail/${pokemon._id}`}>
                      {' '}
                      <li className="pokemonlist-container__list" key={pokemon._id}>
                        <img className="pokemonlist-container__image" src={pokemon.avatarImage} alt={pokemon.name} />
                      </li>
                      {' '}
                    </Link>
                  ))
                }
              </ul>
            )
            : (
              <ul className="pokemonlist-container">
                {
                  pokemons.filter((item) => item.type === typePokemon).map((pokemon) => (
                    <Link to={`detail/${pokemon._id}`}>
                      {' '}
                      <li>
                        <img className="pokemonlist-container__image" src={pokemon.avatarImage} alt={pokemon.name} />
                      </li>
                      {' '}
                    </Link>
                  ))
                }
              </ul>
            )
        }

      </div>
    </>
  );
}

ProductList.propTypes = {
  pokemons: PropTypes.shape([{}]).isRequired,
  user: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ pokemons, user }) {
  return {
    pokemons,
    user
  };
}

export default connect(mapStateToProps)(ProductList);
