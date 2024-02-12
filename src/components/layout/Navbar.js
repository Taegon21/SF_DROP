import React from "react";
import { NavLink } from "react-router-dom"; // NavLink import
import styles from "./Navbar.module.css"; // 스타일 임포트
import navlogo from "../../assets/navlogo.png"; // 로고 이미지 경로 확인 필요

function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink to="/home">
        <img src={navlogo} alt="Logo" className={styles.logo} />
      </NavLink>
      <nav className={styles.mainnav}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
        >
          <p className={styles.name}>Home</p>
        </NavLink>
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
        >
          <p className={styles.name}>Upload</p>
        </NavLink>
        <NavLink
          to="/mypage"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
        >
          <p className={styles.name}>Mypage</p>
        </NavLink>

        <NavLink
          to="/print"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
        >
          <p className={styles.name}>Print</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
