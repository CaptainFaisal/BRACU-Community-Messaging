import "./StatusBox.css"

interface Props {
  currentProfile: object;
}

function StatusBox({ currentProfile } : Props) {

  return (
    <>
        <div className="outer">
            <div className="row">
                <div className="col-1 bg-primary">
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
                <div className="col bg-secondary">e</div>
                <div className="col-1 bg-danger">llo</div>
            </div>
        </div>
    </>
  )
}

export default StatusBox