import { useState, useEffect } from "react";
import axios from "axios";

// 커스텀 훅 useUploadTimeDiff 정의
const UploadTimeDiff = (authCode) => {
  const [uploadTimeDiff, setUploadTimeDiff] = useState("");

  const calculateTimeDiff = (uploadTime) => {
    const now = new Date();
    const diff = Math.abs(now - new Date(uploadTime));
    const hoursDiff = Math.floor(diff / (1000 * 60 * 60));
    const minutesDiff = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsDiff = Math.floor((diff % (1000 * 60)) / 1000);

    return `${hoursDiff}시간 ${minutesDiff}분 ${secondsDiff}초 전`;
  };

  useEffect(() => {
    let intervalId;

    const fetchJSONFile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/files/${authCode}/file_metadata.json`
        );
        const data = response.data;
        if (data && data.upload_time) {
          setUploadTimeDiff(calculateTimeDiff(data.upload_time));

          intervalId = setInterval(() => {
            setUploadTimeDiff(calculateTimeDiff(data.upload_time));
          }, 1000);
        }
      } catch (error) {
        console.error("Failed to fetch or process the JSON file", error);
        setUploadTimeDiff("Could not retrieve upload time");
      }
    };

    fetchJSONFile();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [authCode]);

  return uploadTimeDiff;
};

export default UploadTimeDiff;
