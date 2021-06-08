/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getPokemonById } from '../../redux/actions/actionCreators';
import './style/ProductDetail-style.css';

function ProductDetail({ selectedPokemon, dispatch }) {
  const { pokemonId } = useParams();

  useEffect(() => {
    dispatch(getPokemonById(pokemonId));
  }, [pokemonId]);

  return (
    <div className="detail-container">
      <div className="detail-container__image">
        <img src={selectedPokemon.avatarImage} alt={selectedPokemon.name} />
      </div>
      <div className="information-container">
        <h2 className="information-container__title">
          {selectedPokemon.name}
          {' '}
        </h2>
        <p className="information-container__description">
          {selectedPokemon.description}
          {' '}
        </p>
        <p className="information-container__type">
          {`Type: ${selectedPokemon.type}`}
        </p>
        <p className="information-container__price">
          {`Price: ${selectedPokemon.price}`}
        </p>
        <button type="button">Add to cart</button>
      </div>
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
