import { useHistory, useParams } from "react-router-dom";
import { api } from "../../utils/Api";
import { useState } from "react";

export function ActivationLinkPage() {
  const history = useHistory();
  const [statusCode, setStatusCode] = useState(200);
  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();

  const activateAccount = (data) => {
    fetch(`${api}/api/user/activate-account`, {
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
        if (statusCode === 200) {
          history.push("/url-shortner");
        } else {
          setErrorMessage(response.message);
        }
      });
  };

  return (
    <div className="forgetPasswordMainContainer">
      <div className="forgetPasswordContainer">
        <h1>Activation Link</h1>
        {errorMessage !== "" ? (
          <p style={{ color: "red", margin: "0px" }}>{errorMessage}</p>
        ) : (
          ""
        )}
        <div className="buttonGroup">
          <button
            className="resetPasswordBtn"
            onClick={() => {
              const data = {
                id,
              };

              activateAccount(data);
            }}
          >
            Activate Account
          </button>
        </div>
      </div>
    </div>
  );
}
