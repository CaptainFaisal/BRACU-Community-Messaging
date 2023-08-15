import { useNavigate } from "react-router";
import "./FindPeople.css"

interface Props {
    imgSource?: string;
    name?: string;
    designation?: string;
    mutualFriends?: number;
}

function FindPeople({imgSource, name, designation, mutualFriends}: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate("")
  }
  
  return (
    <>
      <button className="main_btn" onClick={handleClick}>
        <div className="card_main">
          <div className="row" style={{ margin: 0 }}>

            <div className="col-3">
              <img src={"src/assets/"+imgSource} alt="Profile Picture" className="profile_pic" />
            </div>

            <div className="col-9" style={{ marginLeft: "10px", marginRight: "-10px" }}>
              <h4 className="name">{name}</h4>
              <p className="designation">{designation}</p>
              <p className="mutual">({mutualFriends} mutual)</p>
            </div>    

          </div>
        </div>
      </button>
    </>
  )
}

export default FindPeople;