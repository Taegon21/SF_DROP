import styles from "./ProfileBar.module.css";
import profileimg from "../../assets/profileimg.png";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

function ProfileBar() {
  // const [userId, setUserId] = useState("");

  // useEffect(() => {
  //   // 로컬 스토리지에서 사용자 ID 불러오기
  //   const storedUserId = localStorage.getItem("nickname");
  //   if (storedUserId) {
  //     setUserId(storedUserId);
  //   }
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img className={styles.profileimg} src={profileimg} alt="profile" />
        {<p>김태건 님</p>}
        {/* userID */}
      </div>
      <div className={styles.underline}></div>
      <div className={styles.profileinfo}>
        <Link to="/mypage" className={styles.link}>
          <p className={styles.myname}>내 정보</p>
        </Link>
        <Link to="/mypage" className={styles.link}>
          <p>문의 사항</p>
        </Link>
        <Link to="/mypage" className={styles.link}>
          <p>계정 관리</p>
        </Link>
        <Link to="/mypage" className={styles.link}>
          <p>로그 아웃</p>
        </Link>
      </div>
    </div>
  );
}

export default ProfileBar;
