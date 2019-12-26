import React, { Component } from "react";
import FormField from "../bits/formField";
import AButton from "../bits/aButton";
import { auth, signInWithGoogle } from "../firebase/firebase";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <h2>Sign in with your email</h2>
        <form>
          <FormField
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormField
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />
          <div className="btn-wrapper">
            <AButton type="submit" onClick={this.handleSubmit}>
              {" "}
              Sign In{" "}
            </AButton>
            <AButton onClick={signInWithGoogle} googleSignIn>
              {" "}
              Sign In With Google{" "}
            </AButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
