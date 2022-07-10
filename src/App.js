import "./App.css";
import { Route, Switch } from "react-router-dom";
import { LoginPage } from "./Components/User/LoginPage";
import { SignUpPage } from "./Components/User/SignUpPage";
import { ForgotPasswordPage } from "./Components/User/ForgotPasswordPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/" exact>
          {/* <LoginPage /> */}
          <ForgotPasswordPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
