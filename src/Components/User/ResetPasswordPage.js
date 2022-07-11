import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { api } from "../../utils/Api";

export function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const history = useHistory();

  const resetPassword = (data) => {
    fetch(`${api}/api/user/updatePassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      history("/");
    });
  };

  return (
    <div className="forgetPasswordMainContainer">
      <div className="forgetPasswordContainer">
        <h1>Reset Password</h1>
        <div className="userInput">
          <label className="userInputLabel">
            <div>
              Password<span className="mandatory">*</span>
            </div>
            <input
              type="text"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="buttonGroup">
          <button
            className="resetPasswordBtn"
            onClick={() => {
              const data = {
                password: password,
                token: token,
              };

              resetPassword(data);
            }}
          >
            set password
          </button>
        </div>
      </div>
    </div>
  );
}
