require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors');
app.use(express.json());
app.use(cors());


const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');
const chatRouter = require('./routes/chat');
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);
app.use('/chat', chatRouter);
app.use("/uploads",express.static(path.join(__dirname, "./uploads/")));

app.listen(process.env.PORT, () => {
  console.log('Server is running on port ' + process.env.PORT);
});