import React from "react";
import { withRouter } from "react-router-dom";

const LoginPage = withRouter(({ match, history, location }) => {
  return (
    <div>
      <div>Login</div>
    </div>
  );
});

export default LoginPage;
