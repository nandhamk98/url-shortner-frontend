import { useState } from "react";
import { api } from "../../utils/Api";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState();

  const forgotPassword = (data) => {
    fetch(`${api}/api/user/forgotPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => console.log("successfully sent"));
  };

  return (
    <div className="forgetPasswordMainContainer">
      <div className="forgetPasswordContainer">
        <h1>Forgot Password</h1>
        <div className="userInput">
          <label for="email" className="userInputLabel">
            <div>
              Email<span className="mandatory">*</span>
            </div>
            <input
              type="text"
              id="email"
              required
              value="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="buttonGroup">
          <button
            className="loginBtn"
            onClick={() => {
              const data = { email };

              forgotPassword(data);
            }}
          >
            send link
          </button>
        </div>
      </div>
    </div>
  );
}
