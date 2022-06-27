import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState(null);

  const submitHandler = (ev) => {
    ev.preventDefault();
    if (
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      passwordConfirm.trim().length === 0
    ) {
      setMessage("All Fields are required");
    } else if (!email.includes("@")) {
      setMessage("Invalid Email, must include '@' sign");
    } else if (password.trim().length < 8) {
      setMessage("Password must atleast be 8 characters long");
    } else if (password.trim() !== passwordConfirm.trim()) {
      setMessage("Passwords do not match");
    } else {
      setMessage("User Created!");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
          setMessage(null);
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
          setMessage(null);
        }}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => {
          setPasswordConfirm(e.target.value);
          setMessage(null);
        }}
      />
      {message && <p>{message}</p>}
      <input type="submit" value="Submit" />
    </form>
  );
}
