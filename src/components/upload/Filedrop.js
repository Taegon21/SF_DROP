import React, { useState } from "react";
import styles from "./Filedrop.module.css";
import FileList from "./FileList";
import UploadButton from "./UploadButton"; // UploadButton 컴포넌트를 임포트합니다.

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
    <>
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
      <UploadButton
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
      />
    </>
  );
}

export default Filedrop;
