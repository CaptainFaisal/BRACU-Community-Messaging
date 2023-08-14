import Navbar from "../Navbar/Navbar";
import "./Newsfeed.css";

function Newsfeed() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-3 wrapping_div left_panel">
          {/* Left panel. Find people option will be here */}
        </div>

        <div className="col wrapping_div middle_panel">
          {/* Middle panel. Posts will be here */}
        </div>

        <div className="col-3 wrapping_div right_panel">
          {/* Right panel. Advertisements will be here */}
        </div>
      </div>
    </>
  );
}

export default Newsfeed;
