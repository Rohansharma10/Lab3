const express = require('express');
const app = express();
const port = 3000;

// Set up Handlebars as the view engine
app.set('view engine', 'hbs');

// Serve static files from the public directory
app.use(express.static('public'));

// Define the route for the homepage
app.get('/', (req, res) => {
  // Example JSON data
  const jsonData = {
    title: 'Sample Data',
    items: [
      { name: 'Item 1', price: 10 },
      { name: 'Item 2', price: 20 },
      { name: 'Item 3', price: 30 }
    ]
  };

  // Render the index.hbs template with the JSON data
  res.render('index', { jsonData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
