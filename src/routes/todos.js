const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

const todoController = new TodoController();

// Get all todos (index page)
router.get('/', (req, res) => {
  todoController.getAllTodos((err, todos) => {
    if (err) {
      console.error('Error fetching todos:', err);
      res.status(500).send('Error fetching todos');
    } else {
      res.render('index', { todos: todos });
    }
  });
});

// Get create form
router.get('/new', (req, res) => {
  res.render('form', { todo: null, action: 'create' });
});

// Create new todo
router.post('/create', (req, res) => {
  const todo = {
    title: req.body.title,
    content: req.body.content,
    due_date: req.body.due_date,
    priority: req.body.priority
  };
  
  todoController.createTodo(todo, (err, id) => {
    if (err) {
      console.error('Error creating todo:', err);
      res.status(500).send('Error creating todo');
    } else {
      res.redirect('/');
    }
  });
});

// Get edit form
router.get('/edit/:id', (req, res) => {
  todoController.getTodoById(req.params.id, (err, todo) => {
    if (err) {
      console.error('Error fetching todo:', err);
      res.status(500).send('Error fetching todo');
    } else if (!todo) {
      res.status(404).send('Todo not found');
    } else {
      res.render('form', { todo: todo, action: 'edit' });
    }
  });
});

// Update todo
router.post('/update/:id', (req, res) => {
  const todo = {
    title: req.body.title,
    content: req.body.content,
    due_date: req.body.due_date,
    priority: req.body.priority
  };
  
  todoController.updateTodo(req.params.id, todo, (err) => {
    if (err) {
      console.error('Error updating todo:', err);
      res.status(500).send('Error updating todo');
    } else {
      res.redirect('/');
    }
  });
});

// Delete todo
router.post('/delete/:id', (req, res) => {
  todoController.deleteTodo(req.params.id, (err) => {
    if (err) {
      console.error('Error deleting todo:', err);
      res.status(500).send('Error deleting todo');
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
