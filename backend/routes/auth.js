const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//Create a user using: POST "/api/auth/createuser" - > No login required
router.post('/createuser', [
  body('name',  'Enter a valid Name').isLength({ min: 3 }),
  body('email', "enter a valid email").isEmail(),
  body('password', "password must be atleast 5 characters").isLength({ min: 3 })
],async(req, res) => {

  //If there are errors, return bad request  and the errors
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  //check whether the email exists already
  try {
    
  
  let user = await User.findOne({email: req.body.email});
  console.log(user)
  if(user){
    return res.status(400).json({error: "Sorry a user with this email already exist"})
  }  
  //Create anew user
  user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
    res.json(user)
    //catch errors  
  }catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
  }
    
    // .then(user => res.json(user))
    // .catch(err => {console.log(err)
    // res.json({err: 'Please enter a unique value for each', message: err.message})});

})

module.exports = router

