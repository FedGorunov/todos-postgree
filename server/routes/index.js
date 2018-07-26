const express = require('express');
const router = express.Router();
const db = require('../models/queries.js');


router.get('/api/todos', db.getAllTodos);
router.get('/api/todos/:id', db.getOneTodo);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
