import "./Chat.css";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import ChatHead from "../ChatHead/ChatHead";
import ChatTextPanel from "../ChatTextPanel/ChatTextPanel";

function Chat() {
  const [chatHeads, setChatHeads] = useState([]);
  const [activeHead, setActiveHead] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/chat/get-chat-heads/${user.user_id}`)
      .then((res) => {
        setChatHeads(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [activeHead]);
  const user = JSON.parse(localStorage.getItem("user")!);

  return (
    <>
      <Navbar currentProfile={user} />
      <div className="row" id="outer-wrapper">
        <div className="col-3" id="left-panel">
          {
            chatHeads.map((chatHead: object, index) => {
              return <ChatHead currentProfile={user} chatHead={chatHead} setActiveHead={setActiveHead} key={index} />;
            })
          }
        </div>
        <div className="col-9" id="right-panel">
          {
            activeHead ? <ChatTextPanel currentProfile={user} activeHead={activeHead} /> : <div id="chatnotactive">Click on a chat to start</div>
          }
        </div>
      </div>
    </>
  );
}

export default Chat;
