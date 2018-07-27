var promise = require("bluebird");

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require("pg-promise")(options);
//var connectionString = 'postgres://localhost:5432/todos';
const config = {
  host: "localhost",
  user: "postgres",
  password: "4ffff",
  database: "todosdb",
  port: 5432
};

var db = pgp(config);

function getAllTodos(req, res, next) {
  db.any("select * from todos")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL todos"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getOneTodo(req, res, next) {
  const todoId = req.params.id;
  db.one("select * from todos where id =$1", todoId)
    .then(function(data) {
      res.status(200).json({
        status: "good!",
        data: data,
        message: "Retrieved  todo single"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function createTodo(req, res, next) {
  db.none(
    "insert into todos(name, status)" + " values(${name}, ${status}) ",
    req.body
  )
    .then(function() {
      res.status(200).json({
        status: "good!",
        message: "Created new todo!"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function deleteTodo(req, res, next){
  const todoId = req.params.id;
  db.none("delete  from todos where id = $1", todoId)
  .then(function(){
    res.status(200).json({
      status: "good!",
      message: "delete sucsess" 
    });
  }

  ).catch(function(err){
    return next(err);
  });

}

module.exports = {
  getAllTodos: getAllTodos,
  getOneTodo: getOneTodo,
  createTodo: createTodo,
  deleteTodo: deleteTodo
};
