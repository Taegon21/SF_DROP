import { useState, useEffect } from "react";

const UploadTimeDiff = (uploadTime) => {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date();
      const uploadDate = new Date(uploadTime);
      const timePassed = now - uploadDate;
      const remaining = 24 * 60 * 60 * 1000 - timePassed;

      if (remaining <= 0) {
        setRemainingTime("Expired");
        return;
      }

      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      setRemainingTime(`${hours}시간 ${minutes}분 ${seconds}초 남음`);
    };

    calculateRemainingTime();
    const intervalId = setInterval(calculateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, [uploadTime]);

  return remainingTime;
};

export default UploadTimeDiff;
