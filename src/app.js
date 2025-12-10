const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

const app = express();
const PORT = 3000;

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`ToDo application is running on http://localhost:${PORT}`);
});
