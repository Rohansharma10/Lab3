const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define route to render the index view
app.get('/', (req, res) => {
  const jsonData = require('./data.json'); // Path to your JSON file
  res.render('index', { jsonData });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
