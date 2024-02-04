import React, { useState } from "react";
import axios from "axios";
import styles from "./Filefetch.module.css";
import Validtime from "../../utils/Validtime";

const Filefetch = () => {
  const [tempAuthCode, setTempAuthCode] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [previewFile, setPreviewFile] = useState(null);

  // 파일 가져오기 함수 수정
  const fetchFiles = async (currentAuthCode) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/files?authCode=${currentAuthCode}`
      );
      const filteredFiles = response.data.files.filter(
        (file) => !file.endsWith(".json")
      );
      setFiles(filteredFiles || []);
      setError("");
      setPreviewFile(null);
    } catch (err) {
      setError(
        "Failed to fetch files. Please make sure the auth code is correct."
      );
      setFiles([]);
      setPreviewFile(null);
    }
  };

  const handleFetchClick = () => {
    setAuthCode(tempAuthCode); // 상태 업데이트
    fetchFiles(tempAuthCode); // 인자를 전달하여 파일 가져오기 함수 호출
  };

  const isImageFile = (filename) => {
    return /\.(jpg|jpeg|png|gif)$/i.test(filename);
  };

  const handlePreview = (file) => {
    setPreviewFile(file);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={tempAuthCode}
        onChange={(e) => setTempAuthCode(e.target.value)}
        placeholder="Enter Auth Code"
      />
      <button onClick={handleFetchClick}>Fetch Files</button>
      {error && <p className={styles.error}>{error}</p>}
      <div>
        {files.map((file, index) => (
          <div key={index} className={styles.fileItem}>
            <span>{file}</span>
            <button onClick={() => handlePreview(file)}>Preview</button>
            {previewFile === file &&
              (isImageFile(file) ? (
                <img
                  src={`http://localhost:8000/files/${authCode}/${file}`}
                  alt={file}
                  style={{ maxWidth: "100%", maxHeight: "400px" }}
                />
              ) : (
                <a
                  href={`http://localhost:8000/files/${authCode}/${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View {file}
                </a>
              ))}
          </div>
        ))}
        <Validtime authCode={authCode} />
      </div>
    </div>
  );
};

export default Filefetch;
