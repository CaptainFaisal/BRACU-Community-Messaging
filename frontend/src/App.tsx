import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Newsfeed from "./Components/Newsfeed/Newsfeed";

function App() {
  return (
    <Routes>
        <Route path="/" element={ <Login /> }></Route>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/signup" element={ <Signup /> }></Route>
        <Route path="/home" element={ <Newsfeed /> }></Route>
        {/* <Route path="/profile" element={ <Newsfeed /> }></Route> (Yet to implement) */}
    </Routes>
  );
}

export default App;
