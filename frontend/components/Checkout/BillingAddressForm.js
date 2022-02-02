import useInput from "../../hooks/use-input";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./BillingAddressForm.module.css";

const BillingAddressForm = (props) => {
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
    value: enteredPhoneNo,
    isValid: enteredPhoneNoIsValid,
    hasError: phoneNoInputHasError,
    valueChangeHandler: phoneNoChangeHandler,
    inputBlurHandler: phoneNoBlurHandler,
    reset: phoneNoInputResetHandler,
  } = useInput((value) => value.length === 10);

  const {
    value: enteredAddress1,
    isValid: enteredAddress1IsValid,
    hasError: address1HasError,
    valueChangeHandler: address1ChangeHandler,
    inputBlurHandler: address1BlurHandler,
    reset: address1InputResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: cityInputResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredState,
    isValid: enteredStateIsValid,
    hasError: stateInputHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    reset: stateInputResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCountry,
    isValid: enteredCountryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: countryInputResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPinCode,
    isValid: enteredPinCodeIsValid,
    hasError: pincodeInputHasError,
    valueChangeHandler: pinCodeChangeHandler,
    inputBlurHandler: pinCodeBlurHandler,
    reset: pinCodeInputResetHandler,
  } = useInput((value) => value.length === 6);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredPhoneNoIsValid &&
    enteredAddress1IsValid &&
    enteredCityIsValid &&
    enteredStateIsValid &&
    enteredCountryIsValid &&
    enteredPinCodeIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    firstNameInputResetHandler();

    lastNameInputResetHandler();

    phoneNoInputResetHandler();

    address1InputResetHandler();

    cityInputResetHandler();

    stateInputResetHandler();

    countryInputResetHandler();

    pinCodeInputResetHandler();
  };
  return (
    <Card className={classes.form}>
      <form onSubmit={formSubmissionHandler}>
        <div className={classes.header}>
          <h1 className={classes.h1}>Checkout</h1>
        </div>
        <div className={classes.controlGroup}>
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
        </div>
        <div className={classes.controlSingle}>
          <label htmlFor="phoneno">Phone no:.</label>
          <input
            type="phoneno"
            id="number"
            onChange={phoneNoChangeHandler}
            onBlur={phoneNoBlurHandler}
            value={enteredPhoneNo}
          />
          {phoneNoInputHasError && (
            <p className={classes.errorText}>
              Please enter valid phone number.
            </p>
          )}
        </div>
        <div className={classes.controlSingle}>
          <label htmlFor="address1">
            Address(Apartment no./ Housing complex)
          </label>
          <input
            type="text"
            id="address1"
            onChange={address1ChangeHandler}
            onBlur={address1BlurHandler}
            value={enteredAddress1}
          />
          {address1HasError && (
            <p className={classes.errorText}>Address is required.</p>
          )}
        </div>
        <div className={classes.controlGroup}>
          <div className={classes.formControl}>
            <label htmlFor="street">Street name(optional)</label>
            <input type="text" id="street" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="landmark">Landmark(optional)</label>
            <input type="text" id="landmark" />
          </div>
        </div>
        <div className={classes.controlGroup}>
          <div className={classes.formControl}>
            <label htmlFor="city">Town/City:.</label>
            <input
              type="text"
              id="city"
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
              value={enteredCity}
            />
            {cityHasError && (
              <p className={classes.errorText}>Enter a city/town name.</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="state">State:.</label>
            <input
              type="text"
              id="state"
              onChange={stateChangeHandler}
              onBlur={stateBlurHandler}
              value={enteredState}
            />
            {stateInputHasError && (
              <p className={classes.errorText}>Enter a state.</p>
            )}
          </div>
        </div>
        <div className={classes.controlGroup}>
          <div className={classes.formControl}>
            <label htmlFor="country">Country:.</label>
            <input
              type="text"
              id="country"
              onChange={countryChangeHandler}
              onBlur={countryBlurHandler}
              value={enteredCountry}
            />
            {countryHasError && (
              <p className={classes.errorText}>Please enter your country.</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="pincode">Pin Code:.</label>
            <input
              type="number"
              id="pincode"
              onChange={pinCodeChangeHandler}
              onBlur={pinCodeBlurHandler}
              value={enteredPinCode}
            />
            {pincodeInputHasError && (
              <p className={classes.errorText}>Enter location Pin code.</p>
            )}
          </div>
        </div>
        <div>
          <Button type="submit" disabled={!formIsValid}>
            Procced
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default BillingAddressForm;
