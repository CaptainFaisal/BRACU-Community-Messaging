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
// app.get('/insertdummyuser', (req, res) => {
//     // const query = "INSERT INTO user VALUES (1, 'fname', 'lname', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example@xyz.com', '1234567890', 1, CURRENT_TIMESTAMP())";

//     for(let i=1; i<=100; i++) {
//         db.query(`INSERT INTO user VALUES (${i}, 'fname ${i}', 'lname ${i}', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example@xyz.com', '1234567890', 1, CURRENT_TIMESTAMP())`
//         , (err, result) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log('Inserted');
//             }
//         });
//     }
// });


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});