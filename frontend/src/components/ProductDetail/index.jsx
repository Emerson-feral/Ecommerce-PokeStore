import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPokemonById, addToCart } from '../../redux/actions/actionCreators';
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
      <div className="image-container">
        <img className="image-container__item" src={selectedPokemon.avatarImage} alt={selectedPokemon.name} />
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
        <button className="information-container__button" type="button" onClick={() => dispatch(addToCart(selectedPokemon))}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
