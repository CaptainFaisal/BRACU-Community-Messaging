import "./Comment.css";
import { useState } from "react";

interface Props {
  allDetails: object;
  currentProfile: object;
}

function Comment({ allDetails, currentProfile }: Props) {
  const [creator, setCreator] = useState(false);

  const handleCreator = () => {
    // get creator details from database

    return creator;
  };

  return (
    <>
      {handleCreator(allDetails["commenter_id"])["gender"] === "1" ? (
        <img
          src="./src/assets/maleAvatar.png"
          alt="Profile"
          className="ProfileStyleSmall"
        />
      ) : (
        <img
          src="./src/assets/femaleAvatar.png"
          alt="Profile"
          className="ProfileStyleSmall"
        />
      )}
    </>
  );
}

export default Comment;
