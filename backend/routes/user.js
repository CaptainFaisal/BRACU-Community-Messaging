const express = require('express');
const db = require('../connection.js');
const router = express.Router();


router.post('/', (req, res)=> {
    const data = req.body;
    db.query(`SELECT * FROM users WHERE email = "${data.email}" AND password = "${data.password}"`, (err, result) => {
    if (err) console.log(err)
    else res.send(result);
    })
})

router.post('/new', (req, res) => {
    const data = req.body;
    db.query(`SELECT * FROM users WHERE email = "${data.email}"`, (err, result) => {
        if(err){
            console.log(err);
        } else {
            if(result.length > 0) {
                res.send({msg: "Email already exists!"});
            } else{
                db.query(`INSERT INTO users (firstname, lastname, dob, password, gender, email, phone, time_stamp) VALUES ("${data.firstName}", "${data.lastName}", "${data.dob}", "${data.password}", "${data.gender === "F"?0:data.gender==="M"?1:2}", "${data.email}", "${data.phone}", CURRENT_TIMESTAMP())`, er => {
                    if(er) console.log(er)
                    else res.send({msg: "success"});
                })
            }
        }
    })
})
module.exports = router;