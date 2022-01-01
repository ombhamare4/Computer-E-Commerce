import Link from "next/link";

import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="p-5 shadow-xl">
      <div className="grid grid-cols-4 gap-4 text-center p-2 md:block">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold">
            <span className="text-red-500">J</span>upiter
            <span className="text-red-500">.</span>
            <span>com</span>
          </h1>
        </div>
        <div className="col-span-2 flex justify-center items-center md:hidden">
          <div className="flex">
            <div className={styles.btn1}>
              <Link href="/">Home</Link>
            </div>
            <div className={styles.btn1 + " " + styles.dropdown}>
              <Link href="/catlog">Catlog</Link>
            </div>
            <div className={styles.btn1}>
              <Link href="/allcollections">All Collection</Link>
            </div>
            <div className={styles.btn1}>
              <Link href="/customcomputer">Custom Computer</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  text-xl md:hidden">
          <div className="flex justify-center items-center">
            <FaUserAlt />
            <span className="mx-2">Sign In</span>
          </div>
          <div className="flex justify-center items-center">
            <FaShoppingCart />
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
          <button className={styles.btnsearch} type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
