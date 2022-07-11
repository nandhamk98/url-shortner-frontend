import { useHistory, useParams } from "react-router-dom";
import { api } from "../../utils/Api";

export function ActivationLinkPage() {
  const history = useHistory();

  const { id } = useParams();

  const activateAccount = (data) => {
    fetch(`${api}/api/user/activate-account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((data) => {
      history.push("/");
    });
  };

  return (
    <div className="forgetPasswordMainContainer">
      <div className="forgetPasswordContainer">
        <h1>Activation Link</h1>
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
            set password
          </button>
        </div>
      </div>
    </div>
  );
}
