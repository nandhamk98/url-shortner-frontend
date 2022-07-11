import "./user.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../utils/Api";

export function SignUpPage() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusCode, setStatusCode] = useState(200);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const signup = (data) => {
    fetch(`${api}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          setStatusCode(parseInt(response.status));
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (statusCode === 200) {
          history.push("/");
        } else {
          setErrorMessage(response.message);
        }
      });
  };

  return (
    <div className="userPageContainer">
      <div className="SignUpContainer">
        <h1>Signup</h1>
        {errorMessage !== "" ? (
          <p style={{ color: "red", margin: "0px" }}>{errorMessage}</p>
        ) : (
          ""
        )}
        <div className="userInput">
          <label className="userInputLabel">
            <div>
              Email<span className="mandatory">*</span>
            </div>

            <input
              type="email"
              id="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="userInput">
          <label className="userInputLabel">
            <div>
              First Name<span className="mandatory">*</span>
            </div>

            <input
              type="text"
              id="firstName"
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        <div className="userInput">
          <label className="userInputLabel">
            <div>
              Last Name<span className="mandatory">*</span>
            </div>

            <input
              type="text"
              id="lastName"
              value={lastname}
              onChange={(e) => setLastName(e.target.targetvalue)}
            />
          </label>
        </div>
        <div className="userInput">
          <label className="userInputLabel">
            <div>
              Password<span className="mandatory">*</span>
            </div>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="buttonGroup">
          <button
            className="signUpBtn"
            onClick={() => {
              const obj = {
                firstname,
                lastname,
                email,
                password,
              };
              signup(obj);
            }}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
