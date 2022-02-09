import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./LogIn.module.css";
import Link from "next/link";
import { useRef } from "react";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <Card className={classes.form}>
      <form>
        <div className={classes.header}>
          <h1>
            <span className="text-red-500">J</span>upiter
            <span className="text-red-500">.</span>
            <span>com</span>
          </h1>
        </div>
        <h3 className={classes.subHeading}>Login</h3>
        <div className={classes.content}>
          <div className={classes.formControl}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" placeholder="example@gmail.com"  ref={emailRef}/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={passwordRef}/>
          </div>
          <div className={classes.buttonAlign}>
            <Button type="submit">Log In</Button>
          </div>
          <div>
            <h4 className={classes.headref}>
              New user?<Link href="/signup"><span className={classes.blue}>Register</span></Link>
            </h4>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default LogIn;
