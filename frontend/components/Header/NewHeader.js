import styles from "./Header.module.css";
import { useState } from "react";
const NewHeader = () => {
  return (
    <div className="bg-white py-5 px-32 transition-all duration-200 hover:shadow-2xl cursor-pointer">
      <div className="flex  items-center justify-evenly">
        <div>
          <h1 className="text-4xl font-bold">
            <span className="text-red-500">J</span>upiter
            <span className="text-red-500">.</span>
            <span>com</span>
          </h1>
        </div>
        <div className="flex">
          <input
            type="text"
            className={styles.inputsearch}
            placeholder="Search Product here"
          />
          <button className={styles.btnsearch} type="button">
            Search
          </button>
        </div>
        <div>
          <ul className="flex">
            <li className="mx-2 p-2 trasnsition-all duration-500 hover:bg-red-500 hover:text-white rounded-xl hover:rounded-xl">
              24/7 Help
            </li>
            <li
              className={`${styles.dropdown} trasnsition-all duration-500 hover:bg-red-500 hover:text-white rounded-t-xl hover:rounded-t-xl`}
            >
              <h1 className={styles.dropbtn}>Your Account</h1>
              <ul
                className={`${styles.dropdowncontent} trasnsition-all duration-500 `}
              >
                <li className="p-2 text-center border-t-2 bg-white text-black ">
                  Info
                </li>
                <li className="p-2 text-center border-t-2 bg-white text-black ">
                  Logout
                </li>
              </ul>
            </li>
            <li className="mx-2  p-2 trasnsition-all duration-500 hover:bg-red-500 hover:text-white rounded-xl hover:rounded-xl">
              Cart
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar here */}

    </div>
  );
};

export default NewHeader;
