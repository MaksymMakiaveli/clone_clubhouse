import express from 'express';

import dotenv from 'dotenv';
dotenv.config({
  path: 'server/.env',
});

import { passport } from './core/passport';

const PORT = 3001;
const app = express();

app.get('/auth/github', passport.authenticate('github'));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    res.send();
  },
);

app.listen(PORT, () => {
  console.log('SERVER runned');
});
