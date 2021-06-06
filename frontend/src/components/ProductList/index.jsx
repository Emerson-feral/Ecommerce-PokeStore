/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPokemons } from '../../redux/actions/actionCreators';
import './style/ProductList-style.css';

function ProductList({ pokemons, dispatch }) {
  useEffect(() => {
    if (!pokemons.length)dispatch(loadPokemons());
  }, []);
  function handleClickFilter(event) {
    console.log(event);
  }
  const uniqueType = [...new Set(pokemons?.map((item) => item.type))];

  return (
    <>
      <div className="filter">
        <select onChange={(e) => handleClickFilter(e.target.value)}>
          {
                uniqueType.map((type) => <option value={type}>{type}</option>)
              }
        </select>
        <button type="button">Filter</button>
      </div>
      <ul title="pokemonList" className="pokemonlist-container">
        {
          pokemons.map((pokemon) => (
            <li>
              <Link key={pokemon._id} to={`/detail/${pokemon._id}`}>
                <img src={pokemon.avatarImage} alt={pokemon.name} />
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
}

ProductList.propTypes = {
  pokemons: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    pokemons: store.pokemons
  };
}

export default connect(mapStateToProps)(ProductList);
