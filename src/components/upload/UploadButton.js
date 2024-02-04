import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 리액트 라우터의 useNavigate 훅 임포트

const UploadButton = ({ selectedFiles, setSelectedFiles }) => {
  const navigate = useNavigate(); // navigate 함수 사용

  const uploadFiles = async () => {
    const formData = new FormData();
    const authCode = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0"); // 6자리 인증번호 생성

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    // FormData에 인증번호 추가
    formData.append("authCode", authCode);

    try {
      await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSelectedFiles([]); // 파일 목록 초기화
      // 업로드 성공 후, /uploadcomplete로 이동하며 state로 데이터 전달
      navigate("/uploadcomplete", {
        state: { files: selectedFiles, authCode },
      });
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return <button onClick={uploadFiles}>Upload Files</button>;
};

export default UploadButton;
