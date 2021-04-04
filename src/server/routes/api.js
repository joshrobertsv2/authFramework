const express = require('express');
const router = express.Router();


router.post('/signup',
  //User.signup,
  //userController.createUser puts the user in the database
  //userController.createUser,
  (req, res) =>
    res.status(201).send(res.locals.user)
);