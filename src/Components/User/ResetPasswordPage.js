export function ResetPasswordPage() {
  return (
    <div className="forgetPasswordMainContainer">
      <div className="forgetPasswordContainer">
        <h1>reset password</h1>
        <div className="userInput">
          <label for="Password" className="userInputLabel">
            Password<span className="mandatory">*</span>
          </label>
          <input type="text" id="password" required />
        </div>
        <div className="buttonGroup">
          <button className="resetPasswordBtn">set password</button>
        </div>
      </div>
    </div>
  );
}
