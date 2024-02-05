import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authCodeState } from "../../atoms";
import axios from "axios";
import styles from "./FileFetchPage.module.css";
import sfdrop_green from "../../assets/sfdrop_green.png";
import onefileicon from "../../assets/onefileicon.png";

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
    <div className={styles.all}>
      <div className={styles.container}>
        <img src={sfdrop_green} alt="sfdrop_green" className={styles.logo} />
        <div className={styles.filecontainer}>
          {files.length > 0 ? (
            files.map((file, index) => (
              <div key={index} className={styles.fileItem}>
                <div className={styles.fileandicon}>
                  <img
                    src={onefileicon}
                    alt="onefileicon"
                    className={styles.onefileicon}
                  />
                  <span className={styles.fileName}>{file}</span>
                </div>
                {isPdfFile(file) ? (
                  <button
                    className={styles.button}
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
                    className={styles.button}
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
        {/* <button className={styles.button}>전체 인쇄</button> */}
      </div>
    </div>
  );
};

export default FileFetchPage;
