import "./UserProfile.css";
import Navbar from "../Navbar/Navbar";
import StatusBox from "../StatusBox/StatusBox";
import UserPost from "../UserPost/UserPost";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const location = useLocation();
  const [friendCount, setFriendCount] = useState(0);
  const [mutualFriend, setMutualFriend] = useState(0);
  const [usrPost, setUsrPost] = useState([]);
  const [statusText, setStatusText] = useState("");
  const [connect, setConnect] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")!);
  const handleNameSave = async (name:string) => {
    const input = document.getElementById("name") as HTMLInputElement;
    const nameElement = document.createElement("div");
    nameElement.setAttribute("id", "name");
    nameElement.innerHTML = "Updating...";
    await axios.post(`http://localhost:3000/user/updatename`, {user_id: user.user_id, name: name})
    user.firstname = name.split(" ")[0];
    user.lastname = name.split(" ")[1];
    navigate("/profile", {state: location.state})
    nameElement.innerHTML = name;
    nameElement.ondblclick = handleNameEdit;
    input?.replaceWith(nameElement);
  }
  const handlePhotoUpload = async (e:any) => {
    const formData = new FormData();
    formData.append("myfile", e.target.files[0]);
    const response = await axios.post(`http://localhost:3000/user/uploadphoto/${user.user_id}`, formData)
    user.profile_picture = response.data.file;
    navigate("/profile", {state: location.state})
  }
  const handlePhotoChange = (e:any) => {
    const input = document.getElementById("photoinput") as HTMLInputElement;
    input.click();
  }
  const handleNameEdit = () => {
    if (user.user_id !== location.state.targetProfile.user_id) {
      return;
    }

    const nameElement = document.getElementById("name");
    //change the name element to input
    const input = document.createElement("input");
    input.type = "text";
    input.setAttribute("id", "name");
    input.setAttribute("value", nameElement?.innerHTML || "");
    input.onblur = (e) => handleNameSave(e.target?.value);
    // on pressing enter button handleNameSave will be called
    input.onkeyup = (event) => {
      if (event.key === "Enter") {
        handleNameSave(event.target?.value);
      }
    };
    nameElement?.replaceWith(input);
  }
  const handleConnect = (sent_id: Number, received_id: Number) => {
    axios.post(`http://localhost:3000/user/sendrequest`, {user_id: sent_id, received_id: received_id})
    .then(res => {
      if (res.data["msg"] === "connected") {
        setConnect(true);
        console.log("connected");
      }
      else {
        setConnect(false);
        console.log("disconnected");
      }
    })
    .catch(err => {
      console.log(err);
    })


    // first text
    axios.post(`http://localhost:3000/chat/create`, {sender_id: sent_id, receiver_id: received_id, content: ""})
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  };
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/post/getall/${location.state.targetProfile.user_id}`
      )
      .then((res) => {
        setUsrPost(res.data);
        console.log(res.data);
      });
  }, [statusText]);

  useEffect(() => {
    axios.get(`http://localhost:3000/user/checkconnection/${user.user_id}/${location.state.targetProfile.user_id}`)
    .then(res => {
      if (res.data["msg"] === "connected") {
        setConnect(true);
        console.log("connected");
      }
      else {
        setConnect(false);
        console.log("disconnected");
      }
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  const getMutualText = () => {
    if (
      user.user_id ===
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
        `http://localhost:3000/user/getmutualcount/${user.user_id}/${location.state.targetProfile.user_id}`
      )
      .then((res) => {
        setMutualFriend(res.data.mutual);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("Current", user, "Target", location.state.targetProfile);

  return (
    <>
      <div id="supercontainer">
        <Navbar currentProfile={user} />
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
                <input 
                  type="file" 
                  name="" 
                  id="photoinput" 
                  onChange={handlePhotoUpload}  
                  />
                <div id="profile-container">
                  <img
                    src={!location.state.targetProfile.profile_picture?`./src/assets/${location.state.targetProfile["gender"]==="1"?"maleAvatar.png":"femaleAvatar.png"}`:`http://localhost:3000/uploads/${location.state.targetProfile.profile_picture}`}
                    alt="Profile"
                    className="profile-photo"
                    onDoubleClick={handlePhotoChange}
                  />
                </div>
                <div id="name" onDoubleClick={handleNameEdit}>
                  {location.state.targetProfile.firstname}{" "}
                  {location.state.targetProfile.lastname}
                </div>
                <div className="counter">{friendCount} friends</div>
                <div className="counter">{getMutualText()}</div>
                {
                  user.user_id === location.state.targetProfile.user_id?
                  <></>:
                  <button id="connect-btn" onClick={() => handleConnect(user.user_id, location.state.targetProfile.user_id)}>{connect?"Connected":"Connect"}</button>
                }
                
                {/* <button id="message-btn">Message</button> */}
              </div>
            </div>
            <div className="col-8">
              {
                user.user_id === location.state.targetProfile.user_id?
                <div id="status-container">
                  <StatusBox
                    currentProfile={user}
                    statusText={statusText}
                    setStatusText={setStatusText}
                  />
                </div>
                :
                <></>
              }

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
                      profilePicture: item.profile_picture,
                    },
                  }}
                  currentProfile={user}
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
