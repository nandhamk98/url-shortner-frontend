export function ForgotPasswordPage() {
  return (
    <div className="forgetPasswordMainContainer">
      <div className="forgetPasswordContainer">
        <h1>Forgot Password</h1>
        <div className="userInput">
          <label for="email" className="userInputLabel">
            Email<span className="mandatory">*</span>
          </label>
          <input type="text" id="email" required />
        </div>
        <div className="buttonGroup">
          <button className="loginBtn">send link</button>
        </div>
      </div>
    </div>
  );
}
