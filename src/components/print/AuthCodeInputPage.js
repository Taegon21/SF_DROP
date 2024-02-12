import axios from "axios";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authCodeState } from "../../atoms";
import { filesState } from "../../atoms";
import { useNavigate } from "react-router-dom";
import styles from "./AuthCodeInputPage.module.css";
import sfdrop_green from "../../assets/sfdrop_green.png";

const AuthCodeInputPage = () => {
  const [tempAuthCode, setTempAuthCode] = useState("");
  const setAuthCode = useSetRecoilState(authCodeState);
  const setFiles = useSetRecoilState(filesState);
  const navigate = useNavigate();

  const handleFetchClick = async () => {
    if (!tempAuthCode.trim()) {
      window.alert("인증번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8000/files?authCode=${tempAuthCode}`
      );
      const filteredFiles = response.data.files.filter(
        (file) => !file.endsWith(".json")
      );
      setFiles(filteredFiles || []); // 파일 목록 상태 업데이트
      setAuthCode(tempAuthCode);

      // 파일 목록 페이지로 이동
      navigate("/print/filefetch");
    } catch (error) {
      window.alert("잘못된 인증번호입니다. 다시 시도해주세요.");
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
    </div>
  );
};

export default AuthCodeInputPage;
