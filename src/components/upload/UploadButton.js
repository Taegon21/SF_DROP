import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 리액트 라우터의 useNavigate 훅 임포트
import styles from "./UploadButton.module.css";

const UploadButton = ({ selectedFiles, setSelectedFiles }) => {
  const navigate = useNavigate(); 

  const uploadFiles = async () => {
    const formData = new FormData();
    const authCode = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0"); // 6자리 인증번호 생성

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    formData.append("authCode", authCode);

    try {
      await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, 
      });
      setSelectedFiles([]); // 파일 목록 초기화
      navigate("/uploadcomplete", {
        state: { files: selectedFiles, authCode },
      });
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <button className={styles.button} onClick={uploadFiles}>
      Upload Files
    </button>
  );
};

export default UploadButton;
