const express = require('express');
const router = express.Router();
const Posts = require('../models/posts')
const Authentication = require('../authentication');
const ExpressBrute = require('express-brute');


//create a new post
router.post('',Authentication, (req, res) => {
    try {
        const newPost = new Posts({
            postName: req.body.postName,
            postDescription: req.body.postDescription
        });

        const savedPost = newPost.save();

        if (!savedPost) {
            return res.status(400).json({ error: 'No post was created' });
        }

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
router.get('', Authentication, (req, res) => {
   
    Posts.find().then((posts) => {
        if (!posts || posts.length === 0) {
            return res.status(404).json({ Message: 'No posts found' });
        }

        res.json({
            Message: 'Posts Found',
            Posts: posts
        });
    }).catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

//Delete posts
router.delete('/:_id', Authentication, (req, res) => {
    try {
        Posts.deleteOne({_id: req.params._id}).then((result) => {
            if (result.n === 0) {
                return res.status(404).json({message: 'No post found to delete'});
            }

            res.status(200).json({message: 'Post deleted'});
        });
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router