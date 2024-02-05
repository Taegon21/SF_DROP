import UploadTimeDiff from "./UploadTimeDiff";
import styles from "./Validtime.module.css";

const Validtime = ({ authCode }) => {
  const uploadTimeDiff = UploadTimeDiff(authCode);

  return (
    <div>
      <p className = {styles.p}>유효시간: {uploadTimeDiff}</p>
    </div>
  );
};

export default Validtime;