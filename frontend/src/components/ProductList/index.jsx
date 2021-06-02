import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadPokemons from '../../redux/actions/actionCreators';

function ProductList({ pokemons, dispatch }) {
  useEffect(() => {
    if (!pokemons.length)dispatch(loadPokemons());
  }, []);

  return (
    <>
      <ul>
        {
              pokemons.map((item) => (
                <li>
                  <img src={item.avatarImage} alt="avatar" />
                  {item.name}
                  {' '}
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
