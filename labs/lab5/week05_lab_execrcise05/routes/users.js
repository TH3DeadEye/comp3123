const express = require('express');
const fs = require('fs');
const path = require('path');
const routerUser = express.Router();

const userFile = path.join(__dirname, '../user.json');

// Read user.json; errors are passed to the error middleware
const readUser = (callback) => {
  fs.readFile(userFile, 'utf8', (err, data) => {
    if (err) return callback(err);
    try {
      callback(null, JSON.parse(data));
    } catch (e) {
      callback(e);
    }
  });
};

// Return all details from user.json file to client as JSON format
routerUser.get('/profile', (req,res,next) => {
  readUser((err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

// Accept username and password as JSON body parameters
routerUser.post('/login', (req,res,next) => {
  const { username, password } = req.body || {};
  readUser((err, user) => {
    if (err) return next(err);
    if (username !== user.username) {
      return res.json({ status: false, message: 'User Name is invalid' });
    }
    if (password !== user.password) {
      return res.json({ status: false, message: 'Password is invalid' });
    }
    res.json({ status: true, message: 'User Is valid' });
  });
});

// Accept username as parameter and display message in HTML format
routerUser.get('/logout/:username', (req,res) => {
  res.send(`<b>${req.params.username} successfully logged out.</b>`);
});

module.exports = routerUser;
