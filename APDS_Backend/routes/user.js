const express = require('express');
const router = express.Router();
const Users = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ExpressBrute = require('express-brute');

// Create a new instance of ExpressBrute to handle brute force protection
let store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
let bruteforce = new ExpressBrute(store);


//sign up
router.post('/signup', bruteforce.prevent, (req, res) => {
    bcrypt.hash(req.body.password,10).
    then( hash=>{
        const user = new Users({
            name: req.body.name,
            surname: req.body.surname,
            emailAddress: req.body.emailAddress,
            username: req.body.username,
            password: hash
        })
        user.save()
          .then((result) => {
            if (!result) {
              return res.status(400).json({ Message: "User not saved" });
            }

            res.status(200).json({
              Message: "User saved successfully",
              user: user,
              result: result
            });
          })
          .catch((err) => {
            res.status(500).json({
              err: err
            });
          });

    });

})
//Login
router.post('/login', bruteforce.prevent, (req, res) => {
    const { username, password } = req.body;
    Users.findOne({ username: username })
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: "Failed to authenticate1" });
        }
        bcrypt.compare(password, user.password)
          .then(result => {
            const token = jwt.sign(
              { username: user.username, userid: user._id },
              "ThisWillBeTheStringWeUseForAuthentication",
              { expiresIn: "2h" }
            );

            if (result!==null) {
              res.status(200).json({ message: "Authenticated successfully",token: token });
              console.log(token);
            } else {
              res.status(404).json({ message: "Failed to authenticate2" });
            }
          })
          .catch((err) => {
            res.status(500).json({ error: "Failed to authenticate3" });
          });
      })
      .catch((err) => {
        console.log(err);
        return res.status(401).json({
          message: "Failed to authenticate"
        });
      });
   
});


module.exports = router