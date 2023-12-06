const express = require("express");
const db = require("../connection.js");
const router = express.Router();

router.post("/create", (req, res) => {
  const data = req.body;
  db.query(
    `INSERT INTO chat (seen_status, content, send_user_id, receive_user_id	) VALUES (0, "${data.content}", ${data.sender_id}, ${data.receiver_id})`,
    (err, result) => {
      if (err) {
        res.send({ msg: "error" });
      } else {
        res.send({ msg: "success" });
      }
    }
  );
});

router.get("/get-chat-heads/:user_id", (req, res) => {
  db.query(
    `SELECT receive_user_id AS user_id, time_stamp, seen_status
    FROM
    (
        SELECT receive_user_id, time_stamp, seen_status FROM chat WHERE send_user_id = ${req.params.user_id}
        UNION
        SELECT send_user_id, time_stamp, seen_status FROM chat WHERE receive_user_id = ${req.params.user_id}
        ORDER BY time_stamp DESC
    ) AS chats
    GROUP BY chats.receive_user_id
    HAVING MAX(time_stamp)
    ORDER BY time_stamp DESC
    ;`,
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

module.exports = router;
