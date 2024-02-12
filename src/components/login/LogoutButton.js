import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    window.location.href = "http://localhost:8000/auth/logout";
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutButton;
