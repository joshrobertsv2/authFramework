import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import signup from '../auth/auth';

const Signup = () => {
  // useState is a react hook used for setting up mini-state, cannot be used with class components
  // The second argument is like the individual function to change the value of the first arg, like setState
  // useState will NOT merge the state, you have to do it manually. Use spread opertator to handle manual merge or you will overwrite the values
  const [firstName, setFirstName] = useState("this is the initial value");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  // the function that is invoked when a user submits the user registration form
  async function handleSubmit(e) {
    console.log(firstName);
    // preventDefault prevents user submits on blank forms
    e.preventDefault()

    //creates an object out of all of the datafields
    const fields = {
      "first name": firstName,
      "last name": lastName,
      "email":email,
      "password": password,
      "re-enter password": reenterPassword
    }

    if (password !== reenterPassword) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      // sends user data to the database
      await signup(fields)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }
  }

  fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify({
      name: `${firstName} ${lastName}`,
      email_address: email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw error;
      }
    })


  return (
    <>
      { /*looks for the submit event fired from the button */}
      <form className="signup" onSubmit={handleSubmit}>

        <TextField
          type="text"
          id="firstname"
          label="First Name"
          name="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />


        <TextField
          label="Last Name"
          type="text"
          id="lastname"
          name="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />


        <TextField
          label="Email"
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


        <TextField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <TextField
          label="Re-enter Password"
          type="password"
          id="re-enter"
          name="re-enter"
          value={reenterPassword}
          onChange={(e) => setReenterPassword(e.target.value)}
        />
        { /*adding submit to button type looks for the submit event to take place */}
        <Button color="primary" type="submit">Sign Up</Button>
      </form>
    </>
  );
};

export default Signup;


