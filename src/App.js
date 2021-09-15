import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import Menu from "./Menu";
import PostForm from "./Component/PostForm";
import DeleteButton from "./Button/Delete/DeleteButton";
import { FormboxContainer } from "./Component/Container.style";
import {
  SubmitButton,
  Button,
  ButtonLabel,
} from "./Button/Submit/Submit.style";

function App() {
  const [value, setValue] = useState({
    fname: "",
    lname: "",
    email: " ",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.fname && value.lname && value.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const handleFnameInputChange = (event) => {
    setValue({
      ...value,
      fname: event.target.value,
    });
  };
  const handleLnameInputChange = (event) => {
    setValue({
      ...value,
      lname: event.target.value,
    });
  };

  const handleEmailInputChange = (event) => {
    setValue({
      ...value,
      email: event.target.value,
    });
  };

  const Name = () => {
    return <h1>I'm a name page</h1>;
  };

  return (
    <>
      <Button backgroundColor="	#FFA500">
        <ButtonLabel>Hello Shwe</ButtonLabel>
      </Button>
      <Button backgroundColor="#FF4500">
        <ButtonLabel>Hello Shreya </ButtonLabel>
      </Button>
      <PostForm />
      <DeleteButton />
      <Menu />
      <Switch>
        {/* Switch is used to display the default path */}
        <Route exact path="/" component={About} />{" "}
        <Route exact path="/contact" component={Contact} />
        {/* exact key is used to specify only the particular given path */}
        <Route path="/contact/Name" component={Name} />
        <Route component={Error} />
        {/* Error is used to display the page other than the given path entered */}
      </Switch>
      <FormboxContainer>
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div className="success-message">
              {" "}
              Success! Form submitted successfully.
            </div>
          ) : null}

          <input
            type="text"
            onChange={handleFnameInputChange}
            value={value.fname}
            placeholder="First name"
            name="fname"
          ></input>
          {submitted && !value.fname ? (
            <span>Please enter a valid first name</span>
          ) : null}

          <input
            onChange={handleLnameInputChange}
            value={value.lname}
            type="text"
            placeholder="Last name"
            name="lname"
          ></input>
          {submitted && !value.lname ? (
            <span>Please enter a valid last name</span>
          ) : null}
          <input
            onChange={handleEmailInputChange}
            value={value.email}
            type="email"
            placeholder="Email Address"
            name="email"
          ></input>
          {submitted && !value.email ? (
            <span>Please enter a valid email Id</span>
          ) : null}

          <SubmitButton>Submit Form</SubmitButton>
        </form>
      </FormboxContainer>
    </>
  );
}

export default App;
