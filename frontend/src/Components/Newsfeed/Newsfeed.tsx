import Navbar from "../Navbar/Navbar";
import "./Newsfeed.css";
import FindPeople from "../FindPeople/FindPeople";

function Newsfeed() {
  return (
    <>
      <div className="external_wrapper">
        <Navbar />
        <div className="row" style={{ margin: 0 }}>
          <div className="col-3 wrapping_div left_panel">
            {/* Left panel. Find people option will be here */}
            <h3 className="find_people">Find People</h3>

            <FindPeople name = "Udoy" imgSource="maleAvatar.png" designation="Student" mutualFriends={30}/>
          </div>

          <div className="col-6 wrapping_div middle_panel">
            {/* Middle panel. Posts will be here */}
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
