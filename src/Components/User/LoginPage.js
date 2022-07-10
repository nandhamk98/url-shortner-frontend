import "./user.css";
import { useHistory } from "react-router-dom";

export function LoginPage() {
  return (
    <div className="userPageContainer">
      <div className="loginContainer">
        <h1>Login</h1>
        <div className="userInput">
          <label for="email" className="userInputLabel">
            Email<span className="mandatory">*</span>
          </label>
          <input type="text" id="email" required />
        </div>
        <div className="userInput">
          <label for="password" className="userInputLabel">
            Password<span className="mandatory">*</span>
          </label>
          <input type="password" id="password" required />
        </div>
        <div className="buttonGroup">
          <button className="loginBtn">Login</button>
        </div>
        <div className="otherOptions">
          <p>forgot password</p>
          <p>Create a new account</p>
        </div>
      </div>
    </div>
  );
}
