/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getPokemonById } from '../../redux/actions/actionCreators';

function ProductDetail({ selectedPokemon, dispatch }) {
  const { pokemonId } = useParams();

  useEffect(() => {
    dispatch(getPokemonById(pokemonId));
  }, [pokemonId]);

  return (
    <div>
      <img src={selectedPokemon.avatarImage} alt={selectedPokemon.name} />
      <h2>
        {selectedPokemon.name}
        {' '}
      </h2>
      <p>
        {selectedPokemon.description}
        {' '}
      </p>
      <p>
        Type:
        {selectedPokemon.type}
        {' '}
      </p>
      <p>
        Price:
        {selectedPokemon.price}
        {' '}
      </p>
      <button type="button">Add to cart</button>
    </div>
  );
}

ProductDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedPokemon: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

function mapStateToProps({ selectedPokemon }) {
  return {
    selectedPokemon
  };
}
export default connect(mapStateToProps)(ProductDetail);
