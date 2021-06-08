/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPokemonById } from '../../redux/actions/actionCreators';
import './style/ProductDetail-style.css';

function ProductDetail() {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((store) => store.selectedPokemon);
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

export default ProductDetail;
