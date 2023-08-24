const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');
const verifyRouter = require('./routes/verify');
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);
app.use('/verify', verifyRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});