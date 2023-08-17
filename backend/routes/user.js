const express = require('express');
const db = require('../connection.js');
const router = express.Router();


router.post('/', (req, res) => {
    const data = req.body;
    db.query(`SELECT * FROM users WHERE email = "${data.email}" AND password = "${data.password}"`, (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    })
})

router.post('/new', (req, res) => {
    const data = req.body;
    db.query(`SELECT * FROM users WHERE email = "${data.email}"`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                res.send({ msg: "Email already exists!" });
            } else {
                db.query(`INSERT INTO users (firstname, lastname, dob, password, gender, email, phone, time_stamp) VALUES ("${data.firstName}", "${data.lastName}", "${data.dob}", "${data.password}", "${data.gender === "F" ? 0 : data.gender === "M" ? 1 : 2}", "${data.email}", "${data.phone}", CURRENT_TIMESTAMP())`, er => {
                    if (er) console.log(er)
                    else res.send({ msg: "success" });
                })
            }
        }
    })
})
router.post('/createnewpost', (req, res) => {
    const data = req.body;
    db.query(`INSERT INTO posts (content, creator_id) VALUES ("${data.content}", ${data.user_id})`, err => {
        if (err) {
            res.send({ msg: "error" });
        } else {
            res.send({ msg: "success" });
        }
    })
})
router.get('/getrandomusers/:usercount/:user_id', (req, res) => {
    db.query(`SELECT user_id, gender, firstname, lastname, email FROM users WHERE user_id != ${req.params.user_id} ORDER BY RAND() LIMIT ${req.params.usercount};`, (err, result) => {
        if (err) console.log(err)
        res.send(result);
    });
})
router.get('/getmutualcount/:user1/:user2', (req, res) => {
    db.query(`SELECT COUNT(*) AS mutual FROM
((SELECT user_id, received_id FROM friend WHERE user_id=${req.params.user1})
UNION
(SELECT received_id, user_id FROM friend WHERE received_id=${req.params.user1})) t1
inner join ((SELECT user_id, received_id FROM friend WHERE user_id=${req.params.user2})
UNION
(SELECT received_id, user_id FROM friend WHERE received_id=${req.params.user2})) t2
on t1.received_id = t2.received_id;`, (err, result) => {
        if (err) console.log(err)
        res.send(result[0]);
    });
})
module.exports = router;