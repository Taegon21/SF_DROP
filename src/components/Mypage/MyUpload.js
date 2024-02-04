import styles from "./MyUpload.module.css";
import UploadBundle from "./UploadBundle";

function MyUpload() {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Upload 현황 &gt;</h3>
      <UploadBundle />
    </div>
  );
}

export default MyUpload;