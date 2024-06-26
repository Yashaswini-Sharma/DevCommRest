// src/components/auth/SignIn.jsx
import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import AuthDetails from "./AuthDetails";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("displayName", data.user.displayName); // Store display name
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        const user = userCredentials.user;
        localStorage.setItem("email", user.email);
        localStorage.setItem("displayName", user.displayName); // Store display name
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <AuthDetails />
      {value ? (
        <button onClick={handleClick}>Sign In with Google</button>
      ) : (
        <Link to="/">Home</Link>
      )}
    </div>
  );
};

export default SignIn;
