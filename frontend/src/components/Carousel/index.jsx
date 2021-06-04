/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { connect } from 'react-redux';
/* import { PropTypes } from 'prop-types'; */
import { loadPokemons } from '../../redux/actions/actionCreators';
import './styles/Carousel-style.css';

function Slider({ pokemons, dispatch }) {
  useEffect(() => {
    if (!pokemons.length)dispatch(loadPokemons());
  }, []);

  return (
    <Carousel className="Carousel">
      {
        pokemons.slice(1, 4).map((pokemon) => (
          <Link key={pokemon._id} to={`/detail/${pokemon._id}`}>
            <img src={pokemon.avatarImage} alt={pokemon.name} />
          </Link>
        ))
      }
    </Carousel>
  );
}
function mapStateToProps({ pokemons }) {
  return {
    pokemons
  };
}
export default connect(mapStateToProps)(Slider);
