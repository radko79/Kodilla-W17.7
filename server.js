const express = require('express'),
	passport = require('passport'),
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
	config = require('./config'),
	app = express(),
	googleProfile = {};

passport.serializeUser( (user, done) => {
	done(null, user);
});

passport.deserializeUser( (obj, done) => {
	done(null, obj);
});

passport.use(new GoogleStrategy ({
	ClientID: config.GOOGLE_CLIENT_ID,
	clientSecret: config.GOOGLE_CLIENT_SECRET,
	callbackURL: config.CALLBACK_URL
}, function(accessToken, refreshToken, profile, cb) {
		googleProfile = {
			id: profile.id,
			displayName: profile.displayName
		};
		cb(null, profile);
	}
));

app.set('view engine', 'pug');
app.set('views', './views');
app.use(passport.initialize());
app.use(passport.session());
