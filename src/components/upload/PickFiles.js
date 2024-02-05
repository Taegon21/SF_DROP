import styles from "./PickFiles.module.css";
import React, { useState } from "react";
import FileList from "./FileList";
import UploadButton from "./UploadButton";
import fileicon from "../../assets/fileicon.png";

function PickFiles() {
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
      <div className={styles.container}>
        <div className={styles.leftbody}>
          <div
            onDragOver={onDragOver}
            onDrop={onDrop}
            className={styles.uploadcontainer}
          >
            <input
              type="file"
              id="fileInput" // input 태그에 id 속성 추가
              onChange={fileChangedHandler}
              className={styles.fileInput}
              multiple
              style={{ display: "none" }} // input 태그 숨기기
            />
            <label htmlFor="fileInput">
              <img
                src={fileicon}
                alt="Files Icon"
                className={styles.fileicon}
              />
            </label>
            <p className={styles.text}>
              Click Icon or Drag files to Upload
            </p>
          </div>
        </div>
        <div className={styles.rightbody}>
          <FileList files={selectedFiles} onDelete={deleteFile} />
        </div>
      </div>
      <div className={styles.uploadButtonContainer}>
        <UploadButton
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
      </div>
    </>
  );
}

export default PickFiles;
