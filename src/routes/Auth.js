import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <>
      <h1>2 - 7 누리집</h1>
      <div className="padding">
        <form onSubmit={onSubmit}>
          <div>
            <input
              className="input"
              name="email"
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={onChange}
            />
            <br />
            <input
              className="input"
              name="password"
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={onChange}
            />
          </div>
          <input
            className="button"
            type="submit"
            value={newAccount ? "Create Account" : "Sign in"}
          />
        </form>
        <p>or</p>
        <button className="button" name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <br />
        <span>{errorMessage}</span>
        <br />
        <div style={{ margin: "20px" }}>
          <span>
            {newAccount
              ? "이미 계정이 있으신가요? "
              : "아직 계정이 없으신가요? "}
          </span>
          <span className="button" onClick={toggleAccount}>
            {newAccount ? "Sign In" : "Sign Up"}
          </span>{" "}
        </div>
      </div>
    </>
  );
};

export default Auth;
