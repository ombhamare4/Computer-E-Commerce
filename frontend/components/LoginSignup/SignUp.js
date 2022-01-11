import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./SignUp.module.css";

const SignUp = () => {
  return (
    <Card className={classes.form}>
      <form>
        <div className={classes.header}>
          <h1>Sign Up</h1>
        </div>
        <div className={classes.content}>
          <div className={classes.controlGroup}>
            <div className={classes.formControl}>
              <label htmlFor="fname">First Name</label>
              <input type="fname" id="fname" />
            </div>
            <div className={classes.formControl}>
              <label htmlFor="lname">Last Name</label>
              <input type="lname" id="lname" />
            </div>
          </div>
          <div className={classes.controlGroup}>
            <div className={classes.formControl}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="example@gmail.com" />
            </div>
            <div className={classes.formControl}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
          </div>
          <div>
            <Button type="submit">Sign Up</Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default SignUp;
