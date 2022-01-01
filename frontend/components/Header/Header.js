import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="p-5 shadow-xl">
      <div className="grid grid-cols-4 gap-4 text-center p-2 md:block">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold">
            <span className="text-red-500">Big</span>-Market
            <span className="text-red-500">.</span>
          </h1>
        </div>
        <div className="col-span-2 flex justify-center items-center md:hidden">
          <ul className="flex">
            <li className={styles.btn1}>Home</li>
            <li className={styles.btn1}>Catlog</li>
            <li className={styles.btn1}>All Collection</li>
            <li className={styles.btn1}>More</li>
          </ul>
        </div>
        <div className="grid grid-cols-2  text-xl md:hidden">
          <div className="flex justify-center items-center">
            <FaUserAlt />
            <span className="mx-2">Sign In</span>
          </div>
          <div className="flex justify-center items-center">
            <FaShoppingCart  />
            <span className="mx-2">Cart</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <div>
          <input
            type="text"
            className={styles.inputsearch}
            placeholder="Search Product here"
          />
          <button
            className={styles.btnsearch}
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
