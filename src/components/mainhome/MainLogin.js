import styles from "./MainLogin.module.css";
import sfdrop_green from "../../assets/sfdrop_green.png";
import KakaoLoginButton from "../login/KakaoLoginButton";

function MainLogin() {
  return (
    <div className={styles.container}>
      <div className={styles.leftbody}>
        <img className={styles.logo} src={sfdrop_green} alt="sfdrop_green" />
      </div>
      <div className={styles.rightbody}>
        <h1>SF DROP</h1>
        <h2>Safe & Fast</h2>
        <h2>세상에서 가장 빠르고 안전하게 파일을 인쇄해보세요!</h2>
        <p className={styles.st}>지금 바로 시작하기</p>
        <KakaoLoginButton />
      </div>
    </div>
  );
}

export default MainLogin;
