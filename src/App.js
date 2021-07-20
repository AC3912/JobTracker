import { Redirect, Route, Switch } from "react-router";
import { PrivateRoute } from "./components";

import { Home, LoginPage, SignupPage } from "./pages";
import Routes from "./Routes";

const App = () => (
  <div>
    <Switch>
      <Route path={Routes.LOGIN_PAGE}>
        <LoginPage />
      </Route>

      <Route path={Routes.SIGNUP_PAGE}>
        <SignupPage />
      </Route>

      <PrivateRoute path={Routes.HOME_PAGE}>
        <Home />
      </PrivateRoute>

      <Route component={() => <Redirect to={Routes.LOGIN_PAGE} />} />
    </Switch>
  </div>
);

export default App;
