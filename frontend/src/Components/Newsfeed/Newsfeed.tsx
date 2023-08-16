import Navbar from "../Navbar/Navbar";
import "./Newsfeed.css";
import FindPeople from "../FindPeople/FindPeople";
import { useLocation } from "react-router";
import StatusBox from "../StatusBox/StatusBox";

function Newsfeed() {
  const location = useLocation();
  let arr = [location.state, location.state, location.state, location.state, location.state, location.state, location.state, location.state, location.state, location.state, ]
  
  return (
    <>
      <div className="external_wrapper">
        <Navbar gender = {location.state.gender}/>
        <div className="row" style={{ margin: 0 }}>
          <div className="col-3 wrapping_div left_panel">
            {/* Left panel. Find people option will be here */}
            <h3 className="find_people">Find People</h3>

            {/* <FindPeople allDetails = {user details} currentProfile = {location.state}/> */}
            {
              arr.map((item, index) => <FindPeople key={index} allDetails={item} currentProfile={location.state}/>
              )
            }
          </div>

          <div className="col-6 wrapping_div middle_panel">
            {/* Middle panel. Posts will be here */}
            <StatusBox currentProfile={location.state}/>
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
