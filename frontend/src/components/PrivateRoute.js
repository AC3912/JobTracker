import { useEffect, useRef, useState } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

import Routes from "../Routes";

const PrivateRoute = withRouter((props) => {
  const [loaded, setLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  let unlisten = useRef(null);

  const authenticate = () => {
    if (localStorage.getItem("access_token")) {
      setLoaded(true);
      setIsAuthenticated(true);
    } else {
      props.history.push(Routes.LOGIN_PAGE);
    }
  };

  useEffect(() => {
    authenticate();
    unlisten.current = props.history.listen(() => {
      if (!localStorage.getItem("access_token") && isAuthenticated) {
        setIsAuthenticated(false);
      }
    });
    return () => {
      unlisten.current();
    };
  }, [localStorage.getItem("access_token")]);

  const { component: Component, ...rest } = props;
  if (!loaded) return null;
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: Routes.LOGIN_PAGE }} />
        );
      }}
    />
  );
});

export default PrivateRoute;
