import { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router";

interface Props {
  gender?: string;
}

function Navbar( {gender}: Props ) {
  const SearchBarStyle = {
    width: "400px",
    height: "40px",
    borderRadius: "35px",
    background: "#EEE",
    fontSize: "20px",
    padding: "0px 10px 0px 18px",
    margin: "13px 0px 13px 0px",
  };

  const [SearchBar, setSearchBar] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (String: string) => {
    console.log(String + " submitted in form ✅");
    // think about what will happen if the user searches for something
  };

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        event.preventDefault();

        // 👇️ call submit function here
        handleSubmit(event.target.value);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ background: "#9BB1CB", height: "70px" }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <button className="navbar-brand" style={{marginRight: "25%"}} onClick={() => navigate("/home", {state: location.state})}>
            <img src="./src/assets/Logo.png" alt="Logo" />
          </button>

          {/* Collapse button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Search Bar */}
          <div
            // style={{ justifyContent: "center"}}
            id="navbarSupportedContent"
            className="collapse navbar-collapse"
          >
            <form role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search.."
                aria-label="Search"
                id="SearchBar"
                name="SearchBar"
                value={SearchBar}
                onChange={(event) => setSearchBar(event.target.value)}
                style={SearchBarStyle}
              />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
          </div>

          {/* Profile and Chat*/}
          <div
            id="navbarSupportedContent"
            className="collapse navbar-collapse"
            style={{ justifyContent: "right", width: "50px" }}
          >
            <div style={{marginRight: "15px"}}> {/* Chat */}
              <button className="navbar">
                <img
                  src="./src/assets/Chat_icon.png"
                  alt="Profile"
                  className="ProfileStyle"
                />            
              </button>
            </div>
            <div> {/* Profile */}
              <button className="navbar" onClick={() => console.log("Needs to be iplemented")}>
                {gender==='1'?
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
                
                <div className="DownArrow">V</div>
                
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
