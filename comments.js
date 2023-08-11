// Create web server
var express = require('express');
var router = express.Router();
var db = require('../models');

// GET /comments
router.get('/', function(req, res, next) {
  db.Comment.findAll().then(function(comments) {
    res.json(comments);
  });
});

// GET /comments/:id
router.get('/:id', function(req, res, next) {
  db.Comment.findById(parseInt(req.params.id)).then(function(comment) {
    res.json(comment);
  });
});

// POST /comments
router.post('/', function(req, res, next) {
  db.Comment.create(req.body).then(function(comment) {
    res.json(comment);
  });
});

// PUT /comments/:id
router.put('/:id', function(req, res, next) {
  db.Comment.update(req.body, {
    where: {
      id: parseInt(req.params.id)
    }
  }).then(function() {
    res.sendStatus(200);
  });
});

// DELETE /comments/:id
router.delete('/:id', function(req, res, next) {
  db.Comment.destroy({
    where: {
      id: parseInt(req.params.id)
    }
  }).then(function() {
    res.sendStatus(200);
  });
});

module.exports = router;