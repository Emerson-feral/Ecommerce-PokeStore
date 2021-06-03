/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadPokemons } from '../../redux/actions/actionCreators';

function ProductList({ pokemons, dispatch }) {
  useEffect(() => {
    if (!pokemons.length)dispatch(loadPokemons());
  }, []);

  return (
    <>
      <ul title="pokemonList">
        {
          pokemons.map((pokemon) => (
            <Link key={pokemon._id} to={`/detail/${pokemon._id}`}>
              <img src={pokemon.avatarImage} alt={pokemon.name} />
            </Link>
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
