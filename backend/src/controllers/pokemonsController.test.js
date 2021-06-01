const {
  getAll, createOne, getById, updateById, deleteById
} = require('./pokemonsController')();
const Pokemon = require('../model/pokemonModel');

jest.mock('../model/pokemonModel');

describe('getAll', () => {
  test('should get all pokemons', async () => {
    // Arrange
    const res = {
      json: jest.fn()
    };

    Pokemon.find.mockResolvedValueOnce([{ name: 'Pikachu' }]);

    // Act
    await getAll(null, res);

    // Assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pikachu' }]);
  });
});

describe('createOne', () => {
  class MockPokemon {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }

  test('should call json', async () => {
    // arrange
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const newPokemon = new MockPokemon('hero name');

    Pokemon.mockReturnValueOnce(newPokemon);

    // act
    await createOne(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'hero name' });
  });

  test('should call send', async () => {
    // Arrange
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    Pokemon.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error')
    });

    // Act
    await createOne(req, res);

    // Assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('getById', () => {
  test('should call res.status with 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        pokemonId: null
      }
    };

    Pokemon.findById.mockRejectedValueOnce();

    await getById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });

  test('should call res.send with error', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        pokemonId: null
      }
    };

    Pokemon.findById.mockRejectedValueOnce('error');

    await getById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });

  test('should call res.json ', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        pokemonId: null
      }
    };

    Pokemon.findById.mockResolvedValueOnce('pokemon');

    await getById(req, res);

    expect(res.json).toHaveBeenCalledWith('pokemon');
  });
});

describe('updateById', () => {
  test('should call res.json', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        pokemonId: null
      },
      body: {}
    };

    // act
    await updateById(req, res);

    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      body: null,
      params: {
        pokemonId: null
      }
    };

    Pokemon.findByIdAndUpdate.mockRejectedValueOnce('error al buscar el pokemon');

    await updateById(req, res);

    expect(res.send).toHaveBeenCalledWith('error al buscar el pokemon');
  });
});

describe('deleteById', () => {
  test('should call json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        pokemonId: null
      }
    };

    await deleteById(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call status with 204', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        pokemonId: null
      }
    };

    await deleteById(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('should fail and call res.send with error', async () => {
    const req = {
      params: {
        pokemonId: null
      }
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Pokemon.findByIdAndDelete.mockRejectedValueOnce('error');

    await deleteById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
