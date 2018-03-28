const express = require('express'),
	passport = require('passport'),
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
	config = require('./config'),
	app = express(),
	googleProfile = {};