import Link from "next/link";
import { useState } from "react";
// import 'alpinejs';
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BiExit } from "react-icons/bi";
import { useRouter } from "next/router";
import CollectionNavbar from "../CollectionNavbar/CollectionNavbar";
import styles from "./Header.module.css";
import { useAuth } from "../../api/authentication";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { isSignedIn, signOut, userID } = useAuth();
  const router = useRouter();
  const changeToggle = () => {
    if (!isToggle) {
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }
  };

  const logOutHandler = () => {
    signOut();
    if (!isSignedIn()) {
      router.push(`/`);
    }
  };

  return (
    <div className="bg-white transition-all duration-500 hover:shadow-2xl cursor-pointer">
      <div className={styles.headers}>
        <div className="p-3 grid grid-cols-4 items-center md:grid-cols-1 lm:grid-cols-3 xs:p-0 ">
          <div className="flex justify-center items-center md:justify-between md:mb-2">
            <Link href="/">
              <h1 className="text-4xl font-bold xs:text-2xl">
                <span className="text-red-500">J</span>upiter
                <span className="text-red-500">.</span>
                <span>com</span>
              </h1>
            </Link>
            <div className="hidden md:block xs:text-sm">
              <div className="">
                {!isSignedIn() && (
                  <div className={styles.btn1}>
                    <Link href="/account">
                      <div className="flex justify-center items-center cursor-pointer">
                        <FaUserAlt />
                        <span className="mx-2 xs:text-sm xs:mx-0">Sign In</span>
                      </div>
                    </Link>
                  </div>
                )}
                {isSignedIn() && (
                  <div className="flex">
                    <div className={styles.btn1}>
                      <Link href={`/cart/${userID}`}>
                        <div className="flex justify-center items-center cursor-pointer">
                          <FaShoppingCart />
                          <span className="mx-2 xs:text-sm xs:mx-0">Cart</span>
                        </div>
                      </Link>
                    </div>
                    <div className={styles.btn1}>
                      <button
                        className="flex justify-center items-center cursor-pointer"
                        onClick={logOutHandler}
                      >
                        <BiExit />
                        <span className="mx-2 xs:text-sm xs:mx-0">Log Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex col-span-2 lm:col-span-1">
            <input
              type="text"
              className={styles.inputsearch}
              placeholder="Search Product here"
            />
            <button className={styles.btnsearch} type="button">
              Search
            </button>
          </div>
          <div className="flex justify-center text-xl md:hidden">
            {!isSignedIn() && (
              <div className={styles.btn1}>
                <Link href="/account">
                  <div className="flex justify-center items-center cursor-pointer">
                    <FaUserAlt />
                    <span className="mx-2">Sign In</span>
                  </div>
                </Link>
              </div>
            )}
            {isSignedIn() && (
              <div className="flex">
                <div className={styles.btn1}>
                  <Link href={`/cart/${userID}`}>
                    <div className="flex justify-center items-center cursor-pointer">
                      <FaShoppingCart />
                      <span className="mx-2">Cart</span>
                    </div>
                  </Link>
                </div>
                <div className={styles.btn1}>
                  <button
                    className="flex justify-center items-center cursor-pointer"
                    onClick={logOutHandler}
                  >
                    <BiExit />
                    <span className="mx-2">Log Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex justify-evenly items-center mt-2">
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
        <div className=" md:px-3 xs:px-0 mt-2">
          <div className="hidden md:block">
            <div className="bg-red-500  p-2 rounded text-white sm:text-xs">
              <h1 className="flex">
                <button
                  onClick={changeToggle}
                  className="flex justify-center items-center mx-2 font-black"
                >
                  <HiOutlineMenuAlt1 />
                </button>
                Menu
              </h1>
            </div>

            {/* responsive dropdown */}
            {isToggle && (
              <div>
                <div className="">
                  <div className="text-center p-2 transition-all duration-200 hover:text-white hover:bg-red-500">
                    <Link href="/">Home</Link>
                  </div>
                  <div className="text-center p-2 transition-all duration-200 hover:text-white hover:bg-red-500">
                    <Link href="/catlog">Catlog</Link>
                  </div>
                  <div className="text-center p-2 transition-all duration-200 hover:text-white hover:bg-red-500">
                    <Link href="/collections">All Collection</Link>
                  </div>
                  <div className="text-center p-2 transition-all duration-200 hover:text-white hover:bg-red-500">
                    <Link href="/customcomputer">Custom Computer</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* collections  */}
      {/* <div className={styles.collections}>
        <CollectionNavbar id="collectionnavbar" />
      </div> */}
    </div>
  );
};

export default Header;
