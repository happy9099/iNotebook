const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

//Route 1: Get all the notes using: GET "/api/auth/getuser". no login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
   try {
       const notes = await Note.find({ user: req.user.id });
           res.json(notes)
    
   } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})
//Route 2: Add a new note using: POST "/api/auth/addnote". no login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', "Description must be atleast 5 characters").isLength({ min: 3 })], async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            //If there are errors, return bad request  and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savednote = await note.save()

            res.json(savednote)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
          }
    })

module.exports = router