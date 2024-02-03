
import React from "react";

const KakaoLoginButton = () => {
  React.useEffect(() => {
    // SDK 초기화
    window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
  }, []);

  const handleLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/callback",
      // 추가적인 설정이 필요할 수 있습니다.
    });
  };

  return <button onClick={handleLogin}>카카오로 로그인하기</button>;
};

export default KakaoLoginButton;
