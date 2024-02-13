import React from "react";
import kakaobutton from "../../assets/kakaobutton.png";
import styles from "./KakaoLoginButton.module.css";

const KakaoLoginButton = () => {
  React.useEffect(() => {
    // SDK 초기화
    window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
  }, []);

  const handleLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `${process.env.REACT_APP_API_BASE_URL}/callback`,
    });
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
