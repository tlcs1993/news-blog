const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const postRouter = require('./routes/postRouter');

const app = express();

dotenv.config({ path: './config.env' });

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/posts', postRouter);

module.exports = app;
