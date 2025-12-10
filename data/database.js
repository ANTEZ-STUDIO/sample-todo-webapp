const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'todos.db');

class Database {
  constructor() {
    this.db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
      } else {
        console.log('Connected to the SQLite database.');
        this.initialize();
      }
    });
  }

  initialize() {
    const sql = `
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT,
        due_date TEXT,
        priority TEXT CHECK(priority IN ('高', '中', '低')),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    this.db.run(sql, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Todos table ready.');
      }
    });
  }

  getDb() {
    return this.db;
  }

  close() {
    this.db.close((err) => {
      if (err) {
        console.error('Error closing database:', err.message);
      } else {
        console.log('Database connection closed.');
      }
    });
  }
}

module.exports = new Database();
