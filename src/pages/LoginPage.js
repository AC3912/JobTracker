import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import {
  Heading,
  SubHeading,
  TextInput,
  Footnote,
  Button,
} from "../components";
import { login } from "../requests";
import Routes from "../Routes";

const LoginPage = withRouter(({ match, history, location }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      let res = await login(username, password);
      localStorage.setItem("access_token", res.data);
      history.push(Routes.HOME_PAGE);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="absolute top-5 left-5">
        <Heading>Job Tracker</Heading>
      </div>
      <Heading>Log In</Heading>
      <SubHeading>
        ...and get back to work on your journey towards employement!
      </SubHeading>
      <div className="my-2">
        <TextInput
          value={username}
          setValue={setUsername}
          placeholder="Enter your username..."
        />
      </div>
      <div className="my-2">
        <TextInput
          value={password}
          setValue={setPassword}
          placeholder="Enter your password..."
          type="password"
        />
      </div>
      <div className="my-2">
        <Button onClick={handleLogin}>Login</Button>
      </div>
      <Footnote
        unlinkedText="Don't have an account yet?"
        linkedText="Sign up here!"
        onClickLink={() => history.push(Routes.SIGNUP_PAGE)}
      />
    </div>
  );
});

export default LoginPage;
