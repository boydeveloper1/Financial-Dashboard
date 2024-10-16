import { Link, Outlet } from "react-router-dom";

import MainHeader from "../Main-Header/main-header.components";
import Navlinks from "../Nav-Links/nav-links.components";

import styles from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <MainHeader>
        <Link to="/" className={styles.underline}>
          <img
            className={styles.headerImage}
            src="/ninja bank.png"
            alt="Happy-Bank"
          />
        </Link>
        <nav className={styles.mainHeaderNav}>
          <Navlinks />
        </nav>
      </MainHeader>
      <Outlet />
    </>
  );
};

export default MainNavigation;
