import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authCodeState } from "../../atoms";
import axios from "axios";
import styles from "./FileFetchPage.module.css"; // CSS 파일 경로는 실제 구조에 맞게 조정하세요

const FileFetchPage = () => {
  const authCode = useRecoilValue(authCodeState);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFiles = async () => {
      if (authCode) {
        setIsLoading(true);
        try {
          const response = await axios.get(
            `http://localhost:8000/files?authCode=${authCode}`
          );
          const filteredFiles = response.data.files.filter(
            (file) => !file.endsWith(".json")
          );
          setFiles(filteredFiles || []);
          setError("");
        } catch (error) {
          console.error("Failed to fetch files:", error);
          setError("Failed to fetch files");
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchFiles();
  }, [authCode]);

  const isPdfFile = (filename) => /\.pdf$/i.test(filename);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.container}>
      {files.length > 0 ? (
        files.map((file, index) => (
          <div key={index} className={styles.fileItem}>
            <span className={styles.fileName}>{file}</span>
            {isPdfFile(file) ? (
              <button
                className={styles.previewButton}
                onClick={() =>
                  window.open(
                    `http://localhost:8000/files/${authCode}/${file}`,
                    "_blank"
                  )
                }
              >
                미리보기
              </button>
            ) : (
              <button
                className={styles.downloadButton}
                onClick={() =>
                  (window.location.href = `http://localhost:8000/files/${authCode}/${file}`)
                }
              >
                다운로드
              </button>
            )}
          </div>
        ))
      ) : (
        <div>No files found.</div>
      )}
    </div>
  );
};

export default FileFetchPage;
