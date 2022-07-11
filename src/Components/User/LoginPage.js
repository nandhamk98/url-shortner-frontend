import "./user.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../utils/Api";
import { connect } from "react-redux";
import { setUserName, setIsLoggedIn } from "../../store/Actions";

function LoginPage(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusCode, setStatusCode] = useState(200);
  const [errorMessage, setErrorMessage] = useState("");

  const { setUserNameAction, setLoggedInAction } = props;

  const login = (data) => {
    fetch(`${api}/api/user/login`, {
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
          setUserNameAction(response.username);
          setLoggedInAction(true);
          history.push("/url-shortner");
        } else {
          setErrorMessage(response.message);
        }
      });
  };

  return (
    <div className="userPageContainer">
      <div className="loginContainer">
        <h1>Login</h1>
        {errorMessage !== "" ? (
          <p style={{ color: "red", margin: "0px" }}>{errorMessage}</p>
        ) : (
          ""
        )}
        <div className="userInput">
          <label className="userInputLabel">
            <div>
              Email<span className="mandatory">*</span>
            </div>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
        </div>
        <div className="userInput">
          <label className="userInputLabel">
            <div>
              Password<span className="mandatory">*</span>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
        </div>
        <div className="buttonGroup">
          <button
            className="loginBtn"
            onClick={() => {
              const obj = {
                email: email,
                password: password,
              };

              login(obj);
            }}
          >
            Login
          </button>
        </div>
        <div className="otherOptions">
          <p
            onClick={() => {
              history.push("/forgot-password");
            }}
          >
            forgot password
          </p>
          <p
            onClick={() => {
              history.push("/sign-up");
            }}
          >
            Create a new account
          </p>
        </div>
      </div>
    </div>
  );
}

// const mapStoreStateToProps = (state) => {
//   return {
//     ...state,
//   };
// };

const mapActionsToProps = (dispatch) => {
  return {
    setUserNameAction: (username) => dispatch(setUserName(username)),
    setLoggedInAction: (isLoggedIn) => dispatch(setIsLoggedIn(isLoggedIn)),
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
