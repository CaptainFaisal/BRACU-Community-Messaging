import "./UserProfile.css";
import Navbar from "../Navbar/Navbar";
import StatusBox from "../StatusBox/StatusBox";
import UserPost from "../UserPost/UserPost";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const location = useLocation();
  const [friendCount, setFriendCount] = useState(0);
  const [mutualFriend, setMutualFriend] = useState(0);
  const [usrPost, setUsrPost] = useState([]);
  const [statusText, setStatusText] = useState("");
  console.log(location.state.targetProfile);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/post/getallnewsfeed/${location.state.user_id}`
      )
      .then((res) => {
        setUsrPost(res.data);
      });
  }, [statusText]);
  const getMutualText = () => {
    if (
      location.state.currentProfile.user_id ===
      location.state.targetProfile.user_id
    ) {
      return "";
    } else if (mutualFriend === 0) {
      return "(No mutual)";
    } else {
      return `(${mutualFriend} mutual)`;
    }
  };
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/user/getfriendcount/${location.state.targetProfile.user_id}`
      )
      .then((res) => {
        setFriendCount(res.data.friendcount);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `http://localhost:3000/user/getmutualcount/${location.state.currentProfile.user_id}/${location.state.targetProfile.user_id}`
      )
      .then((res) => {
        setMutualFriend(res.data.mutual);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div id="supercontainer">
        <Navbar currentProfile={location.state.currentProfile} />
        <div className="container" id="profile">
          <div className="coverPhoto">
            <img
              src="src/assets/bottola.jpg"
              alt="cover_photo"
              id="cover-photo"
            />
          </div>
          <div className="row">
            <div className="col-4">
              <div id="profile-box">
                <div id="profile-container">
                  {location.state.targetProfile["gender"] === "1" ? (
                    <img
                      src="./src/assets/maleAvatar.png"
                      alt="Profile"
                      className="profile-photo"
                    />
                  ) : (
                    <img
                      src="./src/assets/femaleAvatar.png"
                      alt="Profile"
                      className="profile-photo"
                    />
                  )}
                </div>
                <div id="name">
                  {location.state.targetProfile.firstname}{" "}
                  {location.state.targetProfile.lastname}
                </div>
                <div className="counter">{friendCount} friends</div>
                <div className="counter">{getMutualText()}</div>
                <button id="connect-btn">Connect</button>
                <button id="message-btn">Message</button>
              </div>
            </div>
            <div className="col-8">
              <StatusBox
                currentProfile={location.state}
                statusText={statusText}
                setStatusText={setStatusText}
              />
              
              {usrPost.map((item, index) => (
                <UserPost
                  key={index}
                  details={{
                    post_id: item.post_id,
                    content: item.content,
                    timestamp: item.time_stamp,
                    creator: {
                      firstname: item.firstname,
                      lastname: item.lastname,
                      gender: item.gender,
                    },
                  }}
                  currentProfile={location.state}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
