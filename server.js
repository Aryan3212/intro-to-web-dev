const express = require('express');
const sqlite = require('sqlite3');
sqlite.verbose();
const app = express();
const port = 3000;


// Database setup
const db = new sqlite.Database('./thoughts.db', (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS thoughts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      thought TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});
app.use(express.json());
// Create thought endpoint
app.post('/thoughts', (req, res) => {
  const { thought } = req.body;

  // Validation
  if (!thought) {
    return res.status(400).json({ error: 'Thought is required' });
  }

  db.run('INSERT INTO thoughts (thought) VALUES (?)', [thought], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).send();
  });
});

// Get last 5 thoughts endpoint
app.get('/thoughts', (request, response) => {
  const sql = 'SELECT * FROM thoughts ORDER BY createdAt DESC LIMIT 5';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return response.status(500).json({ error: err.message });
    }
    response.json(rows);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});