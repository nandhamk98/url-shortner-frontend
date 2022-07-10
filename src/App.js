import "./App.css";
import { Route, Switch } from "react-router-dom";
import { LoginPage } from "./Components/User/LoginPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
