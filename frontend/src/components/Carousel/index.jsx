/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { loadPokemons } from '../../redux/actions/actionCreators';
import './styles/Carousel-style.css';

function Slider() {
  const dispatch = useDispatch();
  const allPokemons = useSelector(({ pokemons }) => ({
    pokemons
  }));
  useEffect(() => {
    if (!allPokemons?.pokemons.length)dispatch(loadPokemons());
  }, []);

  return (
    <Carousel className="Carousel-container">
      {
        allPokemons.pokemons.slice(1, 4).map((pokemon) => (
          <Link key={pokemon._id} to={`/detail/${pokemon._id}`}>
            <img className="Carousel-container__image" src={pokemon.avatarImage} alt={pokemon.name} />
          </Link>
        ))
      }
    </Carousel>
  );
}

export default Slider;
