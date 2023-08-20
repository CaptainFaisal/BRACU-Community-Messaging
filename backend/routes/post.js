const express = require('express');
const db = require('../connection.js');
const router = express.Router();

router.post('/createnew', (req, res) => {
    const data = req.body;
    db.query(`INSERT INTO posts (content, creator_id) VALUES ("${data.content}", ${data.user_id});`, err => {
        if (err) {
            res.send({ msg: "error" });
        } else {
            res.send({ msg: "success" });
        }
    })
})
router.post('/createcomment', (req, res) => {
    const data = req.body;
    db.query(`INSERT INTO comment (content, commenter_id, post_id) VALUES ("${data.content}", ${data.user_id}, ${data.post_id})`, (err, result) => {
        if (err) {
            res.send({ msg: "error" });
        } else {
            res.send({ msg: "success" });
        }
    })
})
router.post('/like', (req, res) => {
    const data = req.body;
    db.query(`INSERT INTO reacts_post (post_id, user_id) VALUES (${data.post_id}, ${data.user_id})`, err => {
        if (err) {
            res.send({ msg: "error" });
        } else {
            res.send({ msg: "success" });
        }
    })
})
router.post('/unlike', (req, res) => {
    const data = req.body;
    db.query(`DELETE FROM reacts_post WHERE post_id = ${data.post_id} AND user_id = ${data.user_id}`, err => {
        if (err) {
            res.send({ msg: "error" });
        } else {
            res.send({ msg: "success" });
        }
    })
})
router.post('/share', (req, res) => {
    const data = req.body;
    db.query(`INSERT INTO shared (user_id, post_id) VALUES ("${data.user_id}", ${data.post_id})`, err => {
        if (err) {
            res.send({ msg: "error" });
        } else {
            res.send({ msg: "success" });
        }
    })
})
router.get('/getsharecount/:post_id', (req, res) => {
    db.query(`SELECT COUNT(*) AS sharecount FROM shared WHERE post_id = ${req.params.post_id}`, (err, result) => {
        if (err) console.log(err)
        res.send(result[0]);
    });
});
router.get('/isshared/:post_id/:user_id', (req, res) => {
    db.query(`SELECT * FROM shared WHERE post_id = ${req.params.post_id} AND user_id = ${req.params.user_id}`, (err, result) => {
        if (err) console.log(err)
        res.send(result);
    });
});
router.get('/getallnewsfeed/:user_id', (req, res) => {
    db.query(`SELECT post_id, content, t1.time_stamp, firstname, lastname, gender FROM
    (SELECT * FROM posts
    WHERE creator_id
    IN 
    ((SELECT received_id FROM friend WHERE user_id=${req.params.user_id})
    UNION
    (SELECT user_id FROM friend WHERE received_id=${req.params.user_id})
    UNION
    (SELECT ${req.params.user_id}))) t1
    INNER JOIN
    users u
    on u.user_id = t1.creator_id;`, (err, result) => {
        if (err) console.log(err)
        res.send(result);
    });
})
router.get('/isliked/:post_id/:user_id', (req, res) => {
    db.query(`SELECT * FROM reacts_post WHERE post_id = ${req.params.post_id} AND user_id = ${req.params.user_id}`, (err, result) => {
        if (err) console.log(err)
        res.send(result);
    });
})
router.get('/likecount/:post_id', (req, res) => {
    db.query(`SELECT COUNT(*) AS likecount FROM reacts_post WHERE post_id = ${req.params.post_id}`, (err, result) => {
        if (err) console.log(err)
        res.send(result[0]);
    });
});
router.get('/getallcomments/:post_id', (req, res) => {
    db.query(`SELECT firstname, lastname, gender, content, c.time_stamp 
FROM comment c
INNER JOIN users u
ON c.commenter_id = u.user_id
WHERE c.post_id=${req.params.post_id};`, (err, result) => {
        if (err) console.log(err)
        res.send(result);
    });
})


module.exports = router;