var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
//var connectionString = 'postgres://localhost:5432/todos';
const config = {
  host: 'localhost',
  user: 'postgres',
  password: '4ffff',
  database: 'todosdb',
  port: 5432
};

var db = pgp(config);




function getAllTodos(req, res, next) {
    db.any('select * from todos')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL todos'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  
  module.exports = {
    getAllTodos: getAllTodos};