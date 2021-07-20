import React from "react";
import { withRouter } from "react-router-dom";

import { Heading, SubHeading, Button } from "../components";
import Routes from "../Routes";

const Home = withRouter(({ match, history, location }) => {
  const handleLogout = async () => {
    try {
      localStorage.removeItem("access_token");
      history.push(Routes.LOGIN_PAGE);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="absolute top-5 left-5">
        <Heading>Job Tracker</Heading>
      </div>
      <Heading>Oops! Looks like this site is work in progress</Heading>
      <SubHeading>...come back in a few days to see more!</SubHeading>
      <div className="my-2">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
});

export default Home;
