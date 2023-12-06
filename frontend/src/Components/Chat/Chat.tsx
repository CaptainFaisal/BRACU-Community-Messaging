import "./Chat.css";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import ChatHead from "../ChatHead/ChatHead";

function Chat() {
  const location = useLocation();
  const [chatHeads, setChatHeads] = useState([]);
  const [activeHead, setActiveHead] = useState({});

  useEffect(() => {
    console.log("Current", location.state.currentProfile);
    axios
      .get(`http://localhost:3000/chat/get-chat-heads/${location.state.currentProfile.user_id}`)
      .then((res) => {
        console.log(res.data);
        setChatHeads(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar currentProfile={location.state.currentProfile} />
      <div className="row" id="outer-wrapper">
        <div className="col-3" id="left-panel">
          {
            chatHeads.map((chatHead: object, index) => {
              return <ChatHead chatHead={chatHead}  key={index} />;
            })
          }
        </div>
        <div className="col-9" id="right-panel">
          
        </div>
      </div>
    </>
  );
}

export default Chat;
