import "./Chat.css";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router";

function chat() {
  const location = useLocation();
  return (
    <>
      <Navbar currentProfile={location.state.currentProfile} />
    </>
  );
}

export default chat;
