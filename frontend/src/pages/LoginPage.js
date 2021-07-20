import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { Heading, SubHeading, TextInput, Footnote } from "../components";
import Routes from "../Routes";

const LoginPage = withRouter(({ match, history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          value={email}
          setValue={setEmail}
          placeholder="Enter your email..."
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
      <Footnote
        unlinkedText="Don't have an account yet?"
        linkedText="Sign up here!"
        onClickLink={() => history.push(Routes.SIGNUP_PAGE)}
      />
    </div>
  );
});

export default LoginPage;
