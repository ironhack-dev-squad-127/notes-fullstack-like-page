// server/routes/index.js
const express = require('express');
const router  = express.Router();
const Like = require('../models/Like')

// Route GET /api/likes: to get all likes
router.get('/likes', (req, res, next) => {
  Like.find()
    .then(likes => {
      res.json(likes);
    })
});

// Route POST /api/likes: to add one like
router.post('/likes', (req, res, next) => {
  Like.create({
    name: req.body.name
  })
    .then(createdLike => {
      res.json({
        message: 'The like was successfully created',
        data: createdLike
      })
    })
});

module.exports = router;
