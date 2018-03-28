var express = require('express');
var bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, e => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find({}).then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    console.log(todo)
    if (todo) {
      res.send(todo);
    } else {
      res.send();
    }
    
  }, (e) => {
    res.status(400).send(e)
  })
})

app.listen(5000, () => {
  console.log('Started on port 5000');
});

module.exports = {
  app
};