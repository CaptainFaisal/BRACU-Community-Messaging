const express = require('express');
const db = require('./connection.js');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
app.use('/user', userRouter);
app.use('/post', postRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});