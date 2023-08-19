import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import "./Newsfeed.css";
import FindPeople from "../FindPeople/FindPeople";
import { useLocation } from "react-router";
import StatusBox from "../StatusBox/StatusBox";
import UserPost from "../UserPost/UserPost";
import axios from "axios";

function Newsfeed() {
  const location = useLocation();
  const [usrData, setUsrData] = useState([]);
  const [usrPost, setUsrPost] = useState([]);
  
  const usrSearch = (searchString: string) => {
    if (searchString === "") {
      axios
        .get(
          `http://localhost:3000/user/getrandomusers/10/${location.state.user_id}`
        )
        .then((res) => {
          setUsrData(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios.get(`http://localhost:3000/user/getallusers`).then((res) => {
        const searchResult = res.data.filter((item: any) => {
          return (
            item.firstname.toLowerCase().includes(searchString.toLowerCase()) ||
            item.lastname.toLowerCase().includes(searchString.toLowerCase())
          );
        });
        setUsrData(searchResult);
      });
    }
  };
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/user/getrandomusers/10/${location.state.user_id}`
      )
      .then((res) => {
        setUsrData(res.data);
      })
      .catch((err) => console.log(err));
    axios.get(`http://localhost:3000/post/getallnewsfeed/${location.state.user_id}`).then((res) => {
      setUsrPost(res.data);
    });
  }, []);
  return (
    <>
      <div className="external_wrapper">
        <Navbar gender={location.state.gender} onSearch={usrSearch} />
        <div className="row" style={{ margin: 0 }}>
          <div className="col-3 wrapping_div left_panel">
            {/* Left panel. Find people option will be here */}
            <h3 className="find_people">Find People</h3>

            {/* <FindPeople allDetails = {user details} currentProfile = {location.state}/> */}
            {usrData.map((item, index) => {
              return (
                <FindPeople
                  key={index}
                  allDetails={item}
                  currentProfile={location.state}
                />
              );
            })}
          </div>

          <div className="col-6 wrapping_div middle_panel">
            {/* Middle panel. Posts will be here */}
            <StatusBox currentProfile={location.state} />
            {
              usrPost.map(item => <UserPost details={{post_id: item.post_id, content : item.content, timestamp : item.time_stamp, creator : {firstname: item.firstname, lastname: item.lastname, gender:item.gender}}} currentProfile={location.state}/>)
            }
          </div>

          <div className="col-3 wrapping_div right_panel">
            {/* Right panel. Advertisements will be here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsfeed;
