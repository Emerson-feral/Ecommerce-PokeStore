const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

require('./passport/passport.config');

require('./ddbb/mongoose.config');

const server = express();
const port = process.env.PORT || 2021;

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: false }));

const pokemonsRouter = require('./routes/pokemonsRouter');
const userRouter = require('./routes/user.routes');

server.use('/', authRoutes);
server.use('/api/pokemons', passport.authenticate('jwt', { session: false }), pokemonsRouter);
server.use('/user', passport.authenticate('jwt', { session: false }),
  userRouter);

server.listen(port,
  () => debug(`Server is running in ${chalk.yellow(`localhost:${port}`)}`));
