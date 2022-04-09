import Dropdown from "./DropdownMenu";
import { useState } from "react";
import classes from "./CustomForm.module.css";
import Button from "../UI/Button";
import ComponentObtained from "./ComponentObtained";

const CustomForm = () => {
  const [isBuilding,setIsBuilding] = useState('false');
  const optionRam = ["Corsair","G.Skill","Kingston","HyperX","Adata"];
  const [rselected, rsetSelected] = useState("Ram");
  const optionStorage = ["HDD","SSD"];
  const [sselected, ssetSelected] = useState("Storage");
  const optionGraphic = ["Nvidia","AMD"];
  const [gselected, gsetSelected] = useState("Graphic Card");
  const optionOs = ["Windows 11","Windows 10","Windows 8"];
  const [oselected, osetSelected] = useState("Operating system");
  const optionProcessor = ["Intel","Ryzen"];
  const [pselected, psetSelected] = useState("Processor");
  const optionMother = ["MSI","Asus","Gigabyte","Aorus"];
  const [mselected, msetSelected] = useState("MotherBoard");


  const checkValidation = () => {
    setIsBuilding(true);
    if(rselected !== "Ram" && sselected !== "Storage" && gselected !== "Graphic Card" && oselected !== "Operating system" && pselected !== "Processor" && mselected !== "MotherBoard"){
    setIsBuilding(true);
    }
}
  return (
    <>
      <form >
        <h3 className={classes.h3}>Pick the specs...</h3>
        <div className={classes.table}>
          <Dropdown
            selected={rselected}
            setSelected={rsetSelected}
            options={optionRam}
          />
          <Dropdown
            selected={sselected}
            setSelected={ssetSelected}
            options={optionStorage}
          />
          <Dropdown
            selected={gselected}
            setSelected={gsetSelected}
            options={optionGraphic}
          />
        </div>
        <div className={classes.table}>
          <Dropdown
            selected={oselected}
            setSelected={osetSelected}
            options={optionOs}
          />
          <Dropdown
            selected={pselected}
            setSelected={psetSelected}
            options={optionProcessor}
          />
          <Dropdown
            selected={mselected}
            setSelected={msetSelected}
            options={optionMother}
          />
        </div>
        <div className={classes.box}>
        < Button onClick={checkValidation} className={classes.btn}>Build</Button>
    </div>
      </form>
      {/* {isBuilding && < Button onClick={checkValidation} className={classes.btn}>Build</Button>}
      {!isBuilding && <ComponentObtained/>} */}
    </>
  );
};

export default CustomForm;
