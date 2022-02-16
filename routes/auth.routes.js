const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const saltRounds = 10;

const User = require('../models/User.model');

const router = require('express').Router();

const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard');

router.get('/signup', isLoggedOut, (req, res, next) => {
  res.render('auth/signup');
});