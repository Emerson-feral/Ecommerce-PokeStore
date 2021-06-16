/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemons } from '../../redux/actions/actionCreators';
import './style/ProductList-style.css';

function ProductList() {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons);
  const user = useSelector((store) => store.user);
  const [typePokemon, setTypePokemon] = useState(null);

  useEffect(() => {
    if (!pokemons.length)dispatch(loadPokemons(user));
  }, []);

  function handleChangeFilter(event) {
    setTypePokemon(event);
  }

  const uniqueType = [...new Set(pokemons?.map((item) => item.type))];

  return (
    <>
      <div className="filter-container">
        <select className="filter-container__select" data-testid="filter-select" onChange={(e) => handleChangeFilter(e.target.value)}>
          <option value="">Type</option>
          {
                uniqueType?.map((type) => <option data-testid="change-option" value={type}>{type}</option>)
              }
        </select>
        <button className="filter-container__button" type="button" data-testid="button-setType" onClick={() => setTypePokemon(null)}>Clear</button>
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
                      <li className="pokemonlist-container__list" key={pokemon._id}>
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

export default ProductList;
