import { useEffect, useState } from "react";

function Navbar() {
  const SearchBarStyle = {
    width: "400px",
    height: "40px",
    borderRadius: "35px",
    background: "#EEE",
    fontSize: "20px",
    padding: "0px 10px 0px 18px",
    margin: "13px 0px 13px 0px",
  };

  const ProfileStyle = {
    position: "relative",
    borderRadius: "100%",
    width: "50px",
    height: "50px",
    marginRight: "10px",
  };

  const DownArrow = {
    position: "absolute",
    display: "flex",
    fontWeight: "bold",
    color: "white",
    background: "#2A5FAC",
    width: "18px",
    height: "18px",
    border: "0.25px solid white",
    borderRadius: "35px",
    justifyContent: "center",
    fontSize: "12px",
    marginTop: "28px",
    marginLeft: "32px",
  };

  const [SearchBar, setSearchBar] = useState("");

  const handleSubmit = (String: string) => {
    console.log(String + " submitted in form ✅");
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
        className="navbar navbar-expand-lg"
        style={{ background: "#9BB1CB", height: "70px" }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#" style={{marginRight: "25%"}}>
            <img src="./src/assets/Logo.png" alt="Logo" />
          </a>

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
              <a className="navbar" href="#">
                <img
                  src="./src/assets/Logo.png"
                  alt="Profile"
                  style={ProfileStyle}
                />            
              </a>
            </div>
            <div> {/* Profile */}
              <a className="navbar" href="#">
                <img
                  src="./src/assets/Logo.png"
                  alt="Profile"
                  style={ProfileStyle}
                />
                <div style={DownArrow}>V</div>
                
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
