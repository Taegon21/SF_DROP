import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    window.location.href = `${process.env.REACT_APP_API_BASE_URL}/auth/logout`;
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutButton;
