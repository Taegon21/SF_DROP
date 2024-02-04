import React, { useState, useEffect } from "react";

function Home() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // 로컬 스토리지에서 사용자 ID 불러오기
    const storedUserId = localStorage.getItem("nickname");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      <h1>Home</h1>
      {/* 사용자 ID가 있으면 화면에 표시 */}
      {userId && <p>Welcome, User: {userId}</p>}
    </div>
  );
}

export default Home;
