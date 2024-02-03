import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css"; // 스타일 임포트

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/home" className={styles.link}>
        Home
      </Link>
      <Link to="/upload" className={styles.link}>
        Upload
      </Link>
      <Link to="/mypage" className={styles.link}>
        My Page
      </Link>
      <Link to="/usersign" className={styles.link}>
        User Sign
      </Link>
    </nav>
  );
}

export default Nav;
