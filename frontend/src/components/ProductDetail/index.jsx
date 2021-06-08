import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPokemonById } from '../../redux/actions/actionCreators';
import './style/ProductDetail-style.css';

function ProductDetail() {
  const dispatch = useDispatch();
  const pokemon = useSelector(({ selectedPokemon }) => ({
    selectedPokemon
  }));

  const { pokemonId } = useParams();
  useEffect(() => {
    dispatch(getPokemonById(pokemonId));
  }, []);

  return (
    <div className="detail-container">
      <div className="image-container">
        <img className="image-container__item" src={pokemon.selectedPokemon.avatarImage} alt={pokemon.name} />
      </div>
      <div className="information-container">
        <h2 className="information-container__title">
          {pokemon.selectedPokemon.name}
          {' '}
        </h2>
        <p className="information-container__description">
          {pokemon.selectedPokemon.description}
          {' '}
        </p>
        <p className="information-container__type">
          {`Type: ${pokemon.selectedPokemon.type}`}
        </p>
        <p className="information-container__price">
          {`Price: ${pokemon.selectedPokemon.price}`}
        </p>
        <button className="information-container__button" type="button">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
