import { useState } from "react";
import { api } from "../../utils/Api";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState();
  const [statusCode, setStatusCode] = useState(200);
  const [errorMessage, setErrorMessage] = useState("");

  const forgotPassword = (data) => {
    fetch(`${api}/api/user/forgotPassword`, {
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
        if (statusCode !== 200) {
          setErrorMessage(response.message);
        }
      });
  };

  return (
    <div className="forgetPasswordMainContainer">
      <div className="forgetPasswordContainer">
        <h1>Forgot Password</h1>
        {errorMessage !== "" ? (
          <p style={{ color: "red", margin: "0px" }}>{errorMessage}</p>
        ) : (
          ""
        )}
        <div className="userInput">
          <label for="email" className="userInputLabel">
            <div>
              Email<span className="mandatory">*</span>
            </div>
            <input
              type="text"
              id="email"
              required
              value={email}
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
