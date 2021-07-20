import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import {
  Footnote,
  Heading,
  SubHeading,
  TextInput,
  Button,
} from "../components";
import { createAccount, login } from "../requests";
import Routes from "../Routes";

const SignupPage = withRouter(({ match, history, location }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (username && password && password === confirmPassword) {
      try {
        await createAccount(username, password);
        await handleLogin();
      } catch (err) {
        console.log(err);
      }
    }
  };

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
      <Heading>Sign Up</Heading>
      <SubHeading>
        ...and get started on your journey towards employement 😁
      </SubHeading>
      <div className="my-2">
        <TextInput
          value={username}
          setValue={setUsername}
          placeholder="Enter a username..."
        />
      </div>
      <div className="my-2">
        <TextInput
          value={password}
          setValue={setPassword}
          placeholder="Enter a password..."
          type="password"
        />
      </div>
      <div className="my-2">
        <TextInput
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Confirm your password..."
          type="password"
        />
      </div>
      <div className="my-2">
        <Button onClick={handleSignUp}>Submit</Button>
      </div>
      <Footnote
        unlinkedText="Already have an account?"
        linkedText="Log in here!"
        onClickLink={() => history.push(Routes.LOGIN_PAGE)}
      />
    </div>
  );
});

export default SignupPage;
