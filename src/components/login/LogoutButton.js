import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    // 서버 로그아웃 엔드포인트 호출 대신, 서버에서 카카오 로그아웃 URL로 리다이렉트 처리
    window.location.href = "http://localhost:8000/auth/logout";
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutButton;
