import "./FindPeople.css"

interface Props {
    imgSource?: string;
    name?: string;
    designation?: string;
    mutualFriends?: number;
}

function FindPeople({imgSource, name, designation, mutualFriends}: Props) {
  return (
    <div className="card row">
        <div className="col profile_pic">
            <img src={"src/assets/"+imgSource} alt="Profile Picture" />
        </div>
        <div className="col">
            <h3>{name}</h3>
            <p>{designation}</p>
            <p>{mutualFriends} mutual friends</p>
        </div>        
    </div>
  )
}

export default FindPeople;