import "./user.css";

export function SignUpPage() {
  return (
    <div className="userPageContainer">
      <div className="SignUpContainer">
        <h1>Signup</h1>
        <div className="userInput">
          <label for="email" className="userInputLabel">
            Email<span className="mandatory">*</span>
          </label>
          <input type="email" id="username" required />
        </div>
        <div className="userInput">
          <label for="firstName" className="userInputLabel">
            First Name<span className="mandatory">*</span>
          </label>
          <input type="text" id="firstName" required />
        </div>
        <div className="userInput">
          <label for="lastName" className="userInputLabel">
            Last Name<span className="mandatory">*</span>
          </label>
          <input type="text" id="lastName" required />
        </div>
        <div className="userInput">
          <label for="password" className="userInputLabel">
            Password<span className="mandatory">*</span>
          </label>
          <input type="password" id="password" required />
        </div>
        <div className="buttonGroup">
          <button className="signUpBtn">Create Account</button>
        </div>
      </div>
    </div>
  );
}
