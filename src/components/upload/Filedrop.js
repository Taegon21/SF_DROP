// Filedrop.js
import React, { useState } from "react";
import styles from "./Filedrop.module.css";
import FileList from "./FileList";

function Filedrop() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const fileChangedHandler = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    event.preventDefault();
    setSelectedFiles(Array.from(event.dataTransfer.files));
  };

  // 파일 삭제 핸들러
  const deleteFile = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
  };

  return (
    <div className={styles.fileDropContainer}>
      <div
        onDragOver={onDragOver}
        onDrop={onDrop}
        className={styles.uploadContainer}
      >
        <h1>Upload</h1>
        <input
          type="file"
          onChange={fileChangedHandler}
          className={styles.fileInput}
          multiple
        />
        <p>Drag files here or click to select files</p>
      </div>
      <FileList files={selectedFiles} onDelete={deleteFile} />
    </div>
  );
}

export default Filedrop;
