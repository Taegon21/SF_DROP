import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UploadBundle.module.css";
import Validtime from "../../utils/Validtime"; 
import {handleDelete} from "./HandleDelete"

const UploadBundle = () => {
  const [groupedFiles, setGroupedFiles] = useState([]);

  useEffect(() => {
    const fetchGroupedFiles = async () => {
      try {
        const response = await axios.get("http://localhost:8000/grouped_files");
        setGroupedFiles(response.data);
      } catch (error) {
        console.error("Error fetching files", error);
        // 적절한 에러 처리를 여기에 추가하세요.
      }
    };

    fetchGroupedFiles();
  }, []);

  return (
    <div className={styles.uploadContainer}>
      {Object.entries(groupedFiles).map(([authCode, files], index, array) => (
        <div
          key={authCode}
          className={`${styles.bundle} ${
            index === array.length - 1 ? styles.lastBundle : ""
          }`}
        >
          <div className={styles.fileInfo}>
            <div className={styles.fileList}>
              {files.map((file, fileIndex) => (
                <React.Fragment key={fileIndex}>
                  <span className={styles.fileName}>{file}</span>
                  {fileIndex < files.length - 1 ? <span>/&nbsp;</span> : null}
                </React.Fragment>
              ))}
            </div>
            <div className={styles.details}>
              <span className={styles.authCode}>인증번호: {authCode}</span>
              <div className={styles.time}>
                <Validtime authCode={authCode} />
              </div>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(authCode, setGroupedFiles)}
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
