export function ShortnerInputComponent() {
  return (
    <div className="shortnerInputContainer">
      <div className="userInput">
        <label for="Url" className="userInputLabel">
          Url<span className="mandatory">*</span>
        </label>
        <input type="text" id="Url" className="urlInput" required />
      </div>
      <div className="userInput">
        <label for="slug" className="userInputLabel">
          slug<span className="mandatory">*</span>
        </label>
        <input type="text" id="slug" required />
        <button className="generateRandomString">Generate Random</button>
      </div>
      <div className="buttonGroup">
        <button className="resetPasswordBtn">Create Shortner</button>
      </div>
    </div>
  );
}
