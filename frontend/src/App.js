import { Redirect, Route, Switch } from "react-router";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Routes from "./Routes";

const App = () => (
  <Switch>
    <Route path={Routes.LOGIN_PAGE}>
      <LoginPage />
    </Route>

    <Route path={Routes.SIGNUP_PAGE}>
      <SignupPage />
    </Route>

    <Route component={() => <Redirect to={Routes.LOGIN_PAGE} />} />
  </Switch>
);

export default App;
