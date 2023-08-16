import "./UserPost.css"

function UserPost() {
  return (
    <>
      <div className="user-post">
        <div className="row">
          <div className="col-1">
            {currentProfile["gender"]==='M'?
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
          </div>
          <div className="col-11"></div>
        </div>
      </div>
    </>
  )
}

export default UserPost;