import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Showupload.module.css";
import AuthHeading from "./AuthHeading";
import sfdrop_green from "../../assets/sfdrop_green.png";

function ShowUpload() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const { files, authCode } = location.state || { files: [], authCode: "" };

  return (
    <div className={styles.allcontainer}>
      <AuthHeading />
      <div className={styles.container}>
        <img className={styles.logo} src={sfdrop_green} alt="sfdrop_green" />
        <p className={styles.authCode}>인증번호: {authCode}</p>
        <ul className={styles.fileList}>
          <p className={styles.bolder}>Uploaded Files:</p>
          {files.map((file, index) => (
            <li key={index} className={styles.fileItem}>
              {file.name}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => navigate("/upload")} className={styles.button}>
        Upload Complete
      </button>
    </div>
  );
}

export default ShowUpload;
