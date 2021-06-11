/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

let refreshTokens = [];
const authRoutes = Router();

authRoutes.post('/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res) => {
    res.json({
      message: 'Signup sucessful',
      user: req.user
    });
  });

authRoutes.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');

            return next(error);
          }

          return req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const data = { _id: user._id, email: user.email };
              const token = jwt.sign(
                { user: data },
                process.env.JWT_SECRET,
                { expiresIn: '60m' }
              );
              const refreshToken = jwt.sign(
                { user: data },
                process.env.JWT_SECRET
              );

              refreshTokens.push(refreshToken);

              return res.json({
                token,
                refreshToken
              });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

authRoutes.post('/token', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(token)) {
    return res.sendStatus(403);
  }

  return jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    const data = { _id: user._id, email: user.email };

    const accessToken = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '60m' }
    );

    return res.json({
      accessToken
    });
  });
});

authRoutes.post('/logout', (req, res) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter((current) => current !== token);

  res.send('Logout successful');
});

authRoutes.put('/:userId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.send(error);
  }
});

authRoutes.get('/:userId', async (req, res) => {
  try {
    const getUserById = await User.findById(
      req.params.userId
    )
      .populate('wishlist');

    res.json(getUserById);
  } catch (error) {
    res.send(error);
  }
});

module.exports = authRoutes;
