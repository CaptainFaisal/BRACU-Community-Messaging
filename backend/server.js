const express = require('express');
const db = require('./connection.js');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


const userRouter = require('./routes/user');
app.use('/user', userRouter);
app.use('/testDB', (req, res) => {
    db.query('SELECT * FROM user', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});