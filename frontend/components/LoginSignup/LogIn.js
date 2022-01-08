import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./LogIn.module.css";

const LogIn = () => {
  return (
    <Card className={classes.form}>
      <form>
        <div className={classes.header}>
          <h1>Login</h1>
        </div>
        <div className={classes.content}>
          <div className={classes.formControl}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="example@gmail.com" />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={classes.controlGroup}>
            <Button>Sign Up</Button>
            <Button type="submit">Log In</Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default LogIn;
