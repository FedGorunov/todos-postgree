const express = require('express');
const router = express.Router();
const db = require('../models/queries.js');


router.get('/api/todos', db.getAllTodos);
router.get('/api/todos/:id', db.getOneTodo);
router.post('/api/todos', db.createTodo);
router.delete('/api/todos/:id', db.deleteTodo);
router.put('/api/todos/:id', db.changeTodo);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
