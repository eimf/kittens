import React from "react";
import SignInForm from "../comps/signIn";
import SignUnForm from "../comps/signUp";
import "./styles/registration.scss";

const Registration = () => {
  return (
    <div className="registration-page">
      <SignInForm />
      <SignUnForm />
    </div>
  );
};

export default Registration;
