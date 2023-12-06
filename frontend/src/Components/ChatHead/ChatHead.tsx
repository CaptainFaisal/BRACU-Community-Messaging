import axios from "axios";
import "./ChatHead.css";
import { useEffect, useState } from "react";

interface Props {
  chatHead: object;
}

function ChatHead({ chatHead }: Props) {
  const [chatHeadProfile, setChatHeadProfile] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/getdetails/${chatHead.user_id}`)
      .then((res) => {
        setChatHeadProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {chatHead.seen_status === 0 ? (
        <div id="boldHead">
          <div className="row">
            <div className="col-3">
              {chatHeadProfile.gender === "1" ? (
                <img
                  src="./src/assets/maleAvatar.png"
                  alt="Profile"
                  className="ProfilePic"
                />
              ) : (
                <img
                  src="./src/assets/femaleAvatar.png"
                  alt="Profile"
                  className="ProfilePic"
                />
              )}
            </div>
            <div className="col-9">
              <h4>
                <b>
                  {chatHeadProfile.firstname} {chatHeadProfile.lastname}
                </b>
              </h4>
              <p id="timestamptext">
                <b>
                  {chatHead.time_stamp.slice(8, 10)}-
                  {chatHead.time_stamp.slice(5, 7)}-
                  {chatHead.time_stamp.slice(0, 4)},{" "}
                  {chatHead.time_stamp.slice(11, 16)}
                </b>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div id="normalHead">
          <div className="row">
            <div className="col-3">
              {chatHeadProfile.gender === "1" ? (
                <img
                  src="./src/assets/maleAvatar.png"
                  alt="Profile"
                  className="ProfilePic"
                />
              ) : (
                <img
                  src="./src/assets/femaleAvatar.png"
                  alt="Profile"
                  className="ProfilePic"
                />
              )}
            </div>
            <div className="col-9">
              <h4>
                {chatHeadProfile.firstname} {chatHeadProfile.lastname}
              </h4>
              <p id="timestamptext">
                {chatHead.time_stamp.slice(8, 10)}-
                {chatHead.time_stamp.slice(5, 7)}-
                {chatHead.time_stamp.slice(0, 4)},{" "}
                {chatHead.time_stamp.slice(11, 16)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatHead;
