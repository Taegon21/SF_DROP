import React, { useState } from "react";
import axios from "axios";
import styles from "./Filefetch.module.css";

const Filefetch = () => {
  const [authCode, setAuthCode] = useState("");
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [previewFile, setPreviewFile] = useState(null); // 추가: 미리보기 파일 상태

  const fetchFiles = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/files?authCode=${authCode}`
      );
      setFiles(response.data.files || []);
      setError("");
      setPreviewFile(null); // 파일 목록을 새로 불러올 때 미리보기 초기화
    } catch (err) {
      setError(
        "Failed to fetch files. Please make sure the auth code is correct."
      );
      setFiles([]);
      setPreviewFile(null);
    }
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
        value={authCode}
        onChange={(e) => setAuthCode(e.target.value)}
        placeholder="Enter Auth Code"
      />
      <button onClick={fetchFiles}>Fetch Files</button>
      {error && <p className={styles.error}>{error}</p>}
      <div>
        {files.map((file, index) => (
          <div key={index} className={styles.fileItem}>
            <span>{file}</span>
            <button onClick={() => handlePreview(file)}>Preview</button>
            {previewFile === file && // 미리보기 버튼 클릭 시 해당 파일만 미리보기로 보이게 함
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
      </div>
    </div>
  );
};

export default Filefetch;
