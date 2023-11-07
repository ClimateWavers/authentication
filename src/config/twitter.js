const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const { createJWT } = require("../utils/jwt");
const User = require("../models/User");
const Token = require("../models/Token");

passport.use(
  new TwitterStrategy(
    {
		consumerKey: process.env.X_CLIENT_ID,
		consumerSecret: process.env.X_CLIENT_SECRET,
		callbackURL: `http://localhost:8000/api/v1/auth/twitter/callback`,
    },
    async (token, tokenSecret, profile, done) => {
		try {
		  // return access token if user already exists
		  const userExists = await User.findOne({where: {
			email: profile._json.email,
		  }});
		  if (userExists) {
			// generate an jwt token for user
			const payload = {Id: userExists.Id, email: userExists.email};
			const token = createJWT(payload);

			if (tokenSecret) {
				existingToken = await Token.findOne({where: { userId: userExists._id }});
				  existingToken.update({
				  tokenSecret,
				});
				existingToken.save()
			}
			return done(null, token);
		  }

		  // save user to db and return access token if user does not exist
		  const user = await User.create({
			email: profile._json.email,
			firstName: profile._json.given_name,
			lastName: profile._json.family_name,
			isVerified: true,
			username: profile._json.given_name,
			isGoogleUser: true,
			password: undefined,
		  });

		  const token = createJWT({_id: user._id, email: user.email});
		  await Token.create({
			  refreshToken,
			  userId: user._id,
			});
		  return done(null, token);
		} catch (err) {
		  return done(err, false);
		}
	  }
	)
);

const twitter = passport
module.exports = twitter;
