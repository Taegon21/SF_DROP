import React from "react";
import kakaobutton from "../../assets/kakaobutton.png";
import styles from "./KakaoLoginButton.module.css";
import { useNavigate } from "react-router-dom";

const KakaoLoginButton = () => {
  React.useEffect(() => {
    // SDK 초기화
    window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
  }, []);
  const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

  const handleLogin = () => {
    navigate("/upload"); 
  };

  return (
    <button
      onClick={handleLogin}
      style={{ border: "none", background: "transparent", outline: "none" }}
    >
      <img
        className={styles.kakaoLoginButton}
        src={kakaobutton}
        alt="Kakao Login"
      />
    </button>
  );
};

export default KakaoLoginButton;
