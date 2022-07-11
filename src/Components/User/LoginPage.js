import "./user.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../utils/Api";

export function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (data) => {
    fetch(`${api}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        history.push("/url-shortner");
      });
  };

  return (
    <div className="userPageContainer">
      <div className="loginContainer">
        <h1>Login</h1>
        <div className="userInput">
          <label className="userInputLabel">
            <div>
              Email<span className="mandatory">*</span>
            </div>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
        </div>
        <div className="buttonGroup">
          <button
            className="loginBtn"
            onClick={() => {
              const obj = {
                email: email,
                password: password,
              };

              login(obj);
            }}
          >
            Login
          </button>
        </div>
        <div className="otherOptions">
          <p>forgot password</p>
          <p
            onClick={() => {
              history.push("/sign-up");
            }}
          >
            Create a new account
          </p>
        </div>
      </div>
    </div>
  );
}
