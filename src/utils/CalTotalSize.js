import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CalTotalSize.module.css";

function CalTotalSize() {
  const [totalSize, setTotalSize] = useState(0);

  useEffect(() => {
    const fetchTotalSize = async () => {
      try {
        const response = await axios.get("http://localhost:8000/total_size");
        setTotalSize(response.data.total_size);
      } catch (error) {
        console.error("Error fetching total size:", error);
      }
    };

    fetchTotalSize();
  }, []);

  // const maxSize = 1 * 1024 * 1024 * 1024; // 1GB in bytes
  const maxSize = 100 * 1024 * 1024; // 100MB in bytes
  const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
  const usedPercentage = ((totalSize / maxSize) * 100).toFixed(2);
  const progressBarClass =
    usedPercentage > 100
      ? `${styles.progressBar} ${styles.overLimit}`
      : styles.progressBar;

  return (
    <div className={styles.container}>
      <div className={styles.totalSizeInfo}>
        <p className={styles.text}>
          총 100MB 중 {sizeInMB} MB({usedPercentage}%) 사용{" "}
        </p>
      </div>
      <div className={styles.progressBarContainer}>
        <div
          className={progressBarClass}
          style={{ width: `${usedPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default CalTotalSize;
