import axios from "axios";
import MiddleBoxRaw from "../MiddleBox/MiddleBoxRaw";
import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function Signup() {
  const input_box = {
    width: "80%",
    height: "50px",
    flexShrink: "0",
    borderRadius: "25px",
    background: "rgba(52, 100, 157, 0.4)",
    border: "1px solid rgba(52, 100, 157, 1)",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.35)",
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    margin: "auto",
    padding: "0 20px",
    "&::placeholder": {
      color: "#FFF",
    },
  };

  const button_style = {
    display: "block",
    margin: "auto",
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "3vh",
    fontStyle: "normal",
    fontWeight: 700,
    width: "400px",
    flexShrink: "0",
    borderRadius: "40px",
    background: "rgba(42, 95, 172, 0.60)",
    marginTop: "2vh",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
  };

  const navigate = useNavigate();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formCheck, setFormCheck] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      FirstName : fName,
      LastName : lName,
      Email : email,
      DOB : dob,
      Phone : phone,
      Gender: gender,
      Password : password,
      ConfirmPassword : confirmPassword,
      FormCheck : formCheck
    });

    // if email is not available already, create a new user and navigate to login (need to be implemented)
    navigate("/login");
  };

  return (
    <MiddleBoxRaw blur="10px">
      <form className="signup_form" onSubmit={handleSubmit}>
        <p className="text-center section_text each_row" style={{marginBottom: "30px"}}>Sign Up</p>

        <div className="row each_row">
          {/* First name */}
          <div className="col">
            <label htmlFor="inputFirstName" className="form-label label_text">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName"
              style={{ ...input_box, marginTop: "5px" }}
              onChange={(event) => setFName(event.target.value)}
              required
            />
          </div>
          {/* Last name */}
          <div className="col">
            <label htmlFor="inputLastName" className="form-label label_text">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              style={{ ...input_box, marginTop: "5px" }}
              onChange={(event) => setLName(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="row each_row">
          {/* Email */}
          <div className="col">
            <label htmlFor="inputEmail" className="form-label label_text">
              BRACU Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              style={{ ...input_box, marginTop: "5px" }}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          {/* Date of birth */}
          <div className="col">
            <label htmlFor="inputDob" className="form-label label_text">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="inputDob"
              style={{ ...input_box, marginTop: "5px" }}
              onChange={(event) => setDob(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="row each_row">
          {/* Phone number */}
          <div className="col">
            <label htmlFor="inputPhone" className="form-label label_text">
              Phone number
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              style={{ ...input_box, marginTop: "5px" }}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
          {/* Gender */}
          <div className="col">
            <label htmlFor="inputDob" className="form-label label_text">
              Date of Birth
            </label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Male" value="M" onChange={(event) => setGender(event.target.value)}/>
              <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Female" value="F" onChange={(event) => setGender(event.target.value)}/>
              <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Other" value="O" onChange={(event) => setGender(event.target.value)}/>
              <label className="form-check-label" htmlFor="inlineRadio2">Other</label>
            </div>
          </div>
        </div>

        <div className="row each_row">
          {/* Password */}
          <div className="col">
            <label htmlFor="inputPassword" className="form-label label_text">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              style={{ ...input_box, marginTop: "5px" }}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          {/* Confirm Password */}
          <div className="col">
            <label htmlFor="inputConfirmPassword" className="form-label label_text">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputConfirmPassword"
              style={{ ...input_box, marginTop: "5px" }}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
        </div>

        {/* Terms and conditions */}
        <div className="row form_confirmation" style={{margin: "0 auto"}}>
          <div className="form-check col" style={{margin: "0 auto", marginTop: "20px"}}>
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              style={{ borderRadius: "50%", float: "none", margin: 0, }}
              onChange={(event) => setFormCheck(event.target.checked)}
              required
            />
            <label className="form-check-label" htmlFor="exampleCheck1" style={{marginLeft: "10px"}}>
              I agree to the terms and conditions
            </label>
          </div>
        </div>

        {/* Sign up button */}
        <button type="submit" className="btn" style={{...button_style}}>
          Create Your Account
        </button>
      </form>
    </MiddleBoxRaw>
  );
}

export default Signup;
