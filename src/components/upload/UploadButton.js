import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./UploadButton.module.css";
import { useState } from "react";

const UploadButton = ({ selectedFiles, setSelectedFiles }) => {
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);

  const uploadFiles = async () => {
    setIsUploading(true);
    const formData = new FormData();
    const authCode = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0"); // 6자리 인증번호 생성

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    formData.append("authCode", authCode);

    try {
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setSelectedFiles([]); // 파일 목록 초기화
      navigate("/uploadcomplete", {
        state: { files: selectedFiles, authCode },
      });
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <button className={styles.button} onClick={uploadFiles}>
        Upload Files
      </button>
      {isUploading && (
        <div className={styles.loading}>
          <div className={styles.loadingText}>
            Uploading files, please wait...
          </div>
        </div>
      )}
    </>
  );
};

export default UploadButton;
