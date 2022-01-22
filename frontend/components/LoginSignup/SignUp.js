import Card from "../UI/Card";
import Button from "../UI/Button";
import useInput from "../../hooks/use-input";

import classes from "./SignUp.module.css";

const SignUp = () => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameInputResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameInputResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailInputResetHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordInputResetHandler,
  } = useInput((value) => value.length > 7);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    firstNameInputResetHandler();

    lastNameInputResetHandler();

    emailInputResetHandler();

    passwordInputResetHandler();
  };

 
  return (
    <Card className={classes.form}>
      <form onSubmit={formSubmissionHandler}>
        <div className={classes.header}>
          <h1>Sign Up</h1>
        </div>
        <div className={classes.content}>
          <div className={classes.formControl}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              value={enteredFirstName}
            />
            {firstInputHasError && (
              <p className={classes.errorText}>First name can not be blank.</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              value={enteredLastName}
            />
            {lastInputHasError && (
              <p className={classes.errorText}>Last name can not be blank.</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailInputHasError && (
              <p className={classes.errorText}>Enter a valid email.</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
            />
            {passwordInputHasError && (
          <p className={classes.errorText}>Enter a password with more then 7 characters.</p>
        )}
          </div>
          <div className={classes.buttonAlign}>
            <Button type="submit" disabled={!formIsValid}>
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default SignUp;
