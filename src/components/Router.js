import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Post from "routes/Post";
import EachPost from "routes/EachPost";

function AppRouter({ isLoggedIn, userObject }) {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/post">
              <Post userObject={userObject} />
            </Route>
            <Route exact path="/board/:id">
              <EachPost />
            </Route>
            <Redirect from="*" to="/" />
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
}

export default AppRouter;
