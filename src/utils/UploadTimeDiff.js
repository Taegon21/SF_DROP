import { useState, useEffect } from "react";
import axios from "axios";

const UploadTimeDiff = (authCode) => {
  const [remainingTime, setRemainingTime] = useState("");

  const calculateRemainingTime = (uploadTime) => {
    const now = new Date();
    const uploadDate = new Date(uploadTime);
    const timePassed = now - uploadDate; // 현재 시간과 업로드 시간 사이의 경과 시간
    const remaining = 24 * 60 * 60 * 1000 - timePassed; // 24시간에서 경과 시간을 뺌

    // 남은 시간이 없으면, "Expired" 반환
    if (remaining <= 0) {
      return "Expired";
    }

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    return `${hours}시간 ${minutes}분 ${seconds}초 남음`;
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
          setRemainingTime(calculateRemainingTime(data.upload_time));

          // 1초마다 남은 시간을 다시 계산하여 업데이트
          intervalId = setInterval(() => {
            setRemainingTime(calculateRemainingTime(data.upload_time));
          }, 1000);
        }
      } catch (error) {
        console.error("Failed to fetch or process the JSON file", error);
        setRemainingTime("Could not retrieve upload time");
      }
    };

    fetchJSONFile();

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [authCode]);

  return remainingTime;
};

export default UploadTimeDiff;
