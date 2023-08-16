import { useNavigate } from "react-router";
import "./FindPeople.css"

interface Props {
    allDetails: object;
    currentProfile: object;
}

function FindPeople({allDetails, currentProfile}: Props) {
  const navigate = useNavigate();

  // mutual friends need to be calculated

  const handleClick = () => {
    // navigate("/profile", { state: { allDetails: allDetails, currentProfile: currentProfile } });")
  }
  
  return (
    <>
      <button className="main_btn" onClick={handleClick}>
        <div className="card_main">
          <div className="row" style={{ margin: 0 }}>

            <div className="col-3">
              {
                allDetails["gender"] === 'M' ?
                <img src="./src/assets/maleAvatar.png" alt="Profile Picture" className="profile_pic" /> :
                <img src="./src/assets/femaleAvatar.png" alt="Profile Picture" className="profile_pic" />
              }
            </div>

            <div className="col-9" style={{ marginLeft: "10px", marginRight: "-10px" }}>
              <h4 className="name">{allDetails["firstname"] + " " + allDetails["lastname"]}</h4>
              {
                allDetails["email"].includes("g.bracu.ac.bd") ?
                <p className="designation">Student</p>:
                <p className="designation">Faculty</p>
              }
              <p className="mutual">({} mutual)</p>
            </div>    

          </div>
        </div>
      </button>
    </>
  )
}

export default FindPeople;