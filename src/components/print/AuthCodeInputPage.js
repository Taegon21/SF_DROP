import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authCodeState } from "../../atoms";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // axios 임포트
import styles from "./AuthCodeInputPage.module.css";
import sfdrop_green from "../../assets/sfdrop_green.png"; // 이미지 임포트

const AuthCodeInputPage = () => {
  const [tempAuthCode, setTempAuthCode] = useState("");
  const setAuthCode = useSetRecoilState(authCodeState);
  const navigate = useNavigate();
  const [error, setError] = useState(""); // 에러 메시지 상태

  const handleFetchClick = async () => {
    // 입력된 인증번호가 비어있는 경우 에러 메시지 설정
    if (!tempAuthCode.trim()) {
      setError("Please enter an auth code.");
      return; // 함수 실행을 여기서 중단
    }

    try {
      // 인증번호 유효성 검사를 위한 요청 예시
      // 실제 구현에서는 서버의 해당 API 엔드포인트에 맞게 수정해야 합니다.
      await axios.get(`http://localhost:8000/files?authCode=${tempAuthCode}`);
      setAuthCode(tempAuthCode);
      navigate("/print/filefetch");
    } catch (error) {
      // 잘못된 인증번호 입력 시 에러 처리
      setError("Invalid Auth Code. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <img src={sfdrop_green} alt="sfdrop_green" className={styles.logo} />
      <input
        className={styles.inputplace}
        type="text"
        value={tempAuthCode}
        onChange={(e) => setTempAuthCode(e.target.value)}
        placeholder="인증번호를 입력하세요."
      />
      <button className={styles.button} onClick={handleFetchClick}>
        파일 불러오기
      </button>
      {error && <p>{error}</p>} {/* 에러 메시지 출력 */}
    </div>
  );
};

export default AuthCodeInputPage;
