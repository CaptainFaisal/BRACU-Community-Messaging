import "./UserPost.css"

interface Props {
  allDetails: object
}

function UserPost( {allDetails}: Props ) {
  return (
    <>
      <div className="user-post">
        <div className="row">
          {/* user pic */}
          <button className="col-1 picButton" onClick={() => console.log("Pic")}>
            {allDetails.creator["gender"]==='1'?
                <img
                src="./src/assets/maleAvatar.png"
                alt="Profile"
                className="ProfileStyle"
              /> :
              <img
                src="./src/assets/femaleAvatar.png"
                alt="Profile"
                className="ProfileStyle"
              />
            }
          </button>

          <div className="col-11" style={{ marginLeft: "10px", marginRight: "-10px" }} onClick={() => console.log("Name")}>
            <button className="creator_name nameButton">{allDetails.creator["firstname"] + " " + allDetails.creator["lastname"]}</button>
            <p className="timestamp_text">{allDetails.timestamp}</p>
          </div>

          <div className="col postContent">{allDetails.content.replace('H', "")}</div>
        </div>
      </div>
    </>
  )
}

export default UserPost;