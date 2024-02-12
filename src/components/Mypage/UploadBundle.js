import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UploadBundle.module.css";
import Validtime from "../../utils/Validtime";
import { handleDelete } from "../../utils/HandleDelete";
import fileicon from "../../assets/fileicon.png";

const UploadBundle = () => {
  const [groupedFiles, setGroupedFiles] = useState([]);

  useEffect(() => {
    const fetchGroupedFiles = async () => {
      try {
        const response = await axios.get("http://localhost:8000/grouped_files");
        setGroupedFiles(response.data);
      } catch (error) {
        console.error("Error fetching files", error);
      }
    };

    fetchGroupedFiles();
  }, []);

  return (
    <div className={styles.uploadContainer}>
      {groupedFiles.map((group, index) => (
        <div
          key={group.auth_code}
          className={`${styles.bundle} ${
            index === groupedFiles.length - 1 ? styles.lastBundle : ""
          }`}
        >
          <img src={fileicon} alt="Files Icon" className={styles.fileicon} />
          <div className={styles.fileInfo}>
            <div className={styles.fileList}>
              {group.files.map((file, fileIndex) => (
                <React.Fragment key={fileIndex}>
                  <span className={styles.fileName}>{file}</span>
                  {fileIndex < group.files.length - 1 ? (
                    <span>/&nbsp;&nbsp;</span>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            <div className={styles.details}>
              <span className={styles.authCode}>
                인증번호: {group.auth_code}
              </span>
              <div className={styles.time}>
                <Validtime uploadTime={group.upload_time} />
              </div>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(group.auth_code, setGroupedFiles)}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadBundle;
