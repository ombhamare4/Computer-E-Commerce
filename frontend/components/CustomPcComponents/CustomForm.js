import Dropdown from "./DropdownMenu";
import { useState } from "react";
import classes from "./CustomForm.module.css";
import Button from "../UI/Button";

const CustomForm = () => {
    const [building,isBuilding] = useState('false');
  const options = ["React", "Vue", "Angular"];
  const [pselected, psetSelected] = useState("Choose One");

  const checkValidation = () => {
          
}
  return (
    <>
      <form>
        <h3 className={classes.h3}>Pick the specs...</h3>
        <div className={classes.table}>
          <Dropdown
            selected={pselected}
            setSelected={psetSelected}
            options={options}
          />
          <Dropdown
            selected={pselected}
            setSelected={psetSelected}
            options={options}
          />
          <Dropdown
            selected={pselected}
            setSelected={psetSelected}
            options={options}
          />
        </div>
        <div className={classes.table}>
          <Dropdown
            selected={pselected}
            setSelected={psetSelected}
            options={options}
          />
          <Dropdown
            selected={pselected}
            setSelected={psetSelected}
            options={options}
          />
          <Dropdown
            selected={pselected}
            setSelected={psetSelected}
            options={options}
          />
        </div>
      </form>
      <div className={classes.box}>
      <Button onClick={checkValidation}>Build</Button>
    </div>
    </>
  );
};

export default CustomForm;
