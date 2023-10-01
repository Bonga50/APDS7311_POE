const express = require('express');
const router = express.Router();
const Posts = require('../models/posts')
const Authentication = require('../authentication');


//create a new post
router.post('',Authentication, (req, res) => {
    try {
        const newPost = new Posts({
            postName: req.body.postName,
            postDescription: req.body.postDescription
        });

        newPost.save();

        res.status(201).json({
            Message:'Post created',
            Posts: newPost
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Get all posts
router.get('',Authentication, (req, res) => {
    Posts.find().then((post) => {
        res.json({
            Message: 'Posts Found',
            Posts: post
        });
    })
});

//Delete posts
router.delete('/:postName',Authentication, (req, res) => {
    try {
         Posts.deleteOne({postName: req.params.postName}).then(
        (result) => {res.status(200).json({message:'Post deleted'})}
    );
    }catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
   
});

module.exports = router