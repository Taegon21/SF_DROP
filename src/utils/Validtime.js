import React from "react";
import styles from "./Validtime.module.css";
import UploadTimeDiff from "./UploadTimeDiff";

const Validtime = ({ uploadTime }) => {
  const uploadTimeDiff = UploadTimeDiff(uploadTime);

  return (
    <div>
      <p className={styles.p}>유효시간: {uploadTimeDiff}</p>
    </div>
  );
};

export default Validtime;
