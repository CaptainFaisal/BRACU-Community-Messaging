import Navbar from "./Components/navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Test from "./Components/Test"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about">
            <Navbar />
          </Route>
          <Route path="/users">
            <Navbar />
          </Route>
          <Route path="/">
            <Navbar />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
