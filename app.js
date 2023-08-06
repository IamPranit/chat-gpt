const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const {
  generateMeta,
  generateImage,
} = require('./controllers/openaiController');

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

// routes
app.post('/openai/meta', generateMeta);
app.post('/openai/image', generateImage);

app.listen(4000, () => console.log(`Listening on PORT: ${PORT}`));
