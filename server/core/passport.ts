import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github';

passport.use(
  'github',
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/auth/github/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      const user = {};
      cb();
    },
  ),
);

export { passport };