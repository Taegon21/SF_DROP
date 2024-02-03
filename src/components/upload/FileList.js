// FileList.js
import React from "react";
import styles from "./FileList.module.css"; // CSS 모듈 임포트

function FileList({ files, onDelete }) {
  return (
    <div className={styles.fileListContainer}>
      <h2>Uploaded Files</h2>
      {files.length > 0 ? (
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file.name}
              {/* 버튼에 styles.deleteButton 클래스를 적용 */}
              <button
                onClick={() => onDelete(index)}
                className={styles.deleteButton}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No files uploaded.</p>
      )}
    </div>
  );
}

export default FileList;
