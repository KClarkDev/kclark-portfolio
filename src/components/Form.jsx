import { useState } from "react";
import { validateEmail } from "../utils/helpers";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, or message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
    setMessage("");
  };

  // Clears the error message when the field is focused
  const handleFocus = () => {
    console.log("handleFocus activated");
    setErrorMessage("");
  };

  const handleBlur = (e) => {
    if (!e.target.value.trim()) {
      console.log("handleBlur activated");
      setErrorMessage("Field is required.");
    }
  };

  return (
    <div className="container text-center">
      <h1 className="title-name">Contact me</h1>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <form className="form" onSubmit={handleFormSubmit}>
        <label>Name*</label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <label>Email*</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <label>Message*</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
