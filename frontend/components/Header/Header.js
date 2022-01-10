import Link from "next/link";
import { useState } from "react";

import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import CollectionNavbar from "../CollectionNavbar/CollectionNavbar";
import styles from "./Header.module.css";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  const changeToggle = () => {
    if (!isToggle) {
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }
  };

  return (
    <div className="bg-white">
      <div className={styles.headers}>
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
                <Link href="/collections">All Collection</Link>
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
        <div className="items-center mt-2 sm:text-xs px-16 md:px-5">
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
          {/* responsive collection */}
          <div className={styles.collectionnavbar}>
            <div className="bg-red-500 flex justify-between p-2 rounded text-white sm:text-xs">
              <h1 className="flex">
                <button
                  onClick={changeToggle}
                  className="flex justify-center items-center mx-2 font-black"
                >
                  <HiOutlineMenuAlt1 />
                </button>
                Shop Categories
              </h1>
              <div className="grid grid-cols-2 ">
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

            {/* responsive dropdown */}
            {isToggle && (
              <div>
                <CollectionNavbar />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* collections  */}
      <div className={styles.collections}>
        <CollectionNavbar id="collectionnavbar" />
      </div>

    </div>
  );
};

export default Header;
