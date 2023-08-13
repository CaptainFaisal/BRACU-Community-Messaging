const express = require('express');
const db = require('../connection.js');
const router = express.Router();


router.get('/', (req, res)=> {
    db.query(`SELECT * FROM users`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    db.query(`SELECT * FROM users WHERE user_id = ${userId}`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
router.get('/:userId/posts', (req, res) => {
    const userId = req.params.userId;
    db.query(`SELECT * FROM posts WHERE creator_id = ${userId}`, (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    })
})

module.exports = router;