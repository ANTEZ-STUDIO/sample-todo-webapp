const database = require('../../data/database');

class TodoController {
  constructor() {
    this.db = database.getDb();
  }

  // Get all todos
  getAllTodos(callback) {
    const sql = 'SELECT * FROM todos ORDER BY created_at DESC';
    this.db.all(sql, [], (err, rows) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  }

  // Get single todo by id
  getTodoById(id, callback) {
    const sql = 'SELECT * FROM todos WHERE id = ?';
    this.db.get(sql, [id], (err, row) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, row);
      }
    });
  }

  // Create new todo
  createTodo(todo, callback) {
    const sql = `
      INSERT INTO todos (title, content, due_date, priority)
      VALUES (?, ?, ?, ?)
    `;
    this.db.run(sql, [todo.title, todo.content, todo.due_date, todo.priority], function(err) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, this.lastID);
      }
    });
  }

  // Update todo
  updateTodo(id, todo, callback) {
    const sql = `
      UPDATE todos 
      SET title = ?, content = ?, due_date = ?, priority = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    this.db.run(sql, [todo.title, todo.content, todo.due_date, todo.priority, id], function(err) {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }

  // Delete todo
  deleteTodo(id, callback) {
    const sql = 'DELETE FROM todos WHERE id = ?';
    this.db.run(sql, [id], function(err) {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }
}

module.exports = TodoController;
