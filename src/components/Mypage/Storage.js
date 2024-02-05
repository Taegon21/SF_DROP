import styles from "./Storage.module.css";
import CalTotalSize from "../../utils/CalTotalSize";

function Storage() {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Storage 현황 &gt;</h3>
      <CalTotalSize />
    </div>
  );
}


export default Storage;