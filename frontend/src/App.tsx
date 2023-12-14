import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Newsfeed from "./Components/Newsfeed/Newsfeed";
import UserProfile from "./Components/UserProfile/UserProfile";
import Chat from "./Components/Chat/Chat";
// import Verify from "./Components/Verify/Verify";


function App() {
  const user = localStorage.getItem("user");
  console.log(user)
  return (
    <Routes>
        <Route path="/" element={ <Navigate to={ user ? '/home' : '/login'} />}></Route>
        <Route path="/login" element={ user? <Navigate to='/home' /> : <Login /> }></Route>
        <Route path="/signup" element={ user? <Navigate to='/home' /> : <Signup /> }></Route>
        <Route path="/home" element={ user?<Newsfeed />:<Navigate to='/login' /> }></Route>
        {/* <Route path="/home" element={ <Newsfeed /> }></Route> */}
        {/* <Route path="/verify" element={ <Verify /> }></Route> */}
        <Route path="/profile" element={ user ? <UserProfile /> : <Navigate to ='/login' />}></Route>
        {/* <Route path="/profile" element={ <Newsfeed /> }></Route> (Yet to implement) */}
        <Route path="/chat" element={ user ? <Chat /> : <Navigate to='/login' />}></Route>
    </Routes>
  );
}

export default App;
