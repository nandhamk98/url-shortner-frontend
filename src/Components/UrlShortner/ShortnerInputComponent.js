import { useState } from "react";
import { api } from "../../utils/Api";

export function ShortnerInputComponent({ getShortnerdata }) {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  const createShortner = (data) => {
    console.log(data);
    fetch(`${api}/api/urlShortner/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((data) => {
      console.log(data);
      getShortnerdata();
    });
  };

  const getRandomString = () => {
    const length = 7;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let finalString = "";
    for (let i = 0; i < length; i++) {
      finalString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setSlug(finalString);
  };

  return (
    <div className="shortnerInputContainer">
      <div className="userInput">
        <label className="userInputLabel">
          <div>
            Url<span className="mandatory">*</span>
          </div>
          <input
            type="text"
            id="Url"
            className="urlInput"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            required
          />
        </label>
      </div>
      <div className="userInput slugInput">
        <label className="userInputLabel">
          <div>
            slug<span className="mandatory">*</span>
          </div>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(event) => setSlug(event.target.value)}
            required
          />
        </label>
        <button className="generateRandomString" onClick={getRandomString}>
          Generate Random
        </button>
      </div>
      <div className="buttonGroup">
        <button
          className="resetPasswordBtn"
          onClick={() => {
            const obj = {
              url: url,
              shortner: slug,
              username: "nandhamk",
            };

            createShortner(obj);
          }}
        >
          Create Shortner
        </button>
      </div>
    </div>
  );
}
