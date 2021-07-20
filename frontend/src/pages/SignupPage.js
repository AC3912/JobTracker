import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { Footnote, Heading, SubHeading, TextInput } from "../components";
import Routes from "../Routes";

const SignupPage = withRouter(({ match, history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
          value={email}
          setValue={setEmail}
          placeholder="Enter an email..."
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
      <Footnote
        unlinkedText="Already have an account?"
        linkedText="Log in here!"
        onClickLink={() => history.push(Routes.LOGIN_PAGE)}
      />
    </div>
  );
});

export default SignupPage;
