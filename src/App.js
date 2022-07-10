import "./App.css";
import { Route, Switch } from "react-router-dom";
// import { LoginPage } from "./Components/User/LoginPage";
import { SignUpPage } from "./Components/User/SignUpPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <SignUpPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
