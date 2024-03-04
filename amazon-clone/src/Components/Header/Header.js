import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.Header_container}>
          {/* log  section   */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <GoLocation />
              </span>
              <div>
                <p>deliver to</p>
                <span>usa</span>
              </div>
            </div>
          </div>

          {/* search   */}
          <div className={classes.Search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>
          {/* other section */}
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            <Link to="/Orders">
              <p>returns</p>
              <span> & orders</span>
            </Link>
            <a href="/Cart " className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
