// FileList.js
import React from "react";
import styles from "./FileList.module.css"; // CSS 모듈 임포트
import onefileicon from "../../assets/onefileicon.png";

function FileList({ files, onDelete }) {
  return (
    <div className={styles.fileListContainer}>
      <h2 className={styles.h2}>Uploaded Files</h2>
      <div className={styles.underline}></div>
      {files.length > 0 ? (
        <ul>
          {files.map((file, index) => (
            <div className={styles.filelist}>
              <img
                src={onefileicon}
                alt="File Icon"
                className={styles.fileicon}
              />
              <li key={index}>{file.name}</li>
              <button
                onClick={() => onDelete(index)}
                className={styles.deleteButton}
              >
                x
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <p className={styles.nofile}>No files uploaded</p>
      )}
    </div>
  );
}

export default FileList;
