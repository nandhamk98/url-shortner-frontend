import "./App.css";
import { Route, Switch } from "react-router-dom";
import { LoginPage } from "./Components/User/LoginPage";
import { SignUpPage } from "./Components/User/SignUpPage";
import { ForgotPasswordPage } from "./Components/User/ForgotPasswordPage";
import { ResetPasswordPage } from "./Components/User/ResetPasswordPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/forgot-password">
          <ForgotPasswordPage />
        </Route>
        <Route path="/reset-password/:token">
          <ResetPasswordPage />
        </Route>
        <Route path="/" exact>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
