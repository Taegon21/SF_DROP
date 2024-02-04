import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Showupload.module.css";

function ShowUpload() {
  const location = useLocation();
  const navigate = useNavigate(); // navigate 함수 사용
  const { files, authCode } = location.state || { files: [], authCode: "" };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload Complete</h1>
      <p className={styles.authCode}>Auth Code: {authCode}</p>
      <p>Uploaded Files:</p>
      <ul className={styles.fileList}>
        {files.map((file, index) => (
          <li key={index} className={styles.fileItem}>
            {file.name}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/home")} className={styles.homeButton}>
        Home
      </button>
    </div>
  );
}

export default ShowUpload;
