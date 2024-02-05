import styles from "./UploadHeading.module.css";

function UploadHeading() {
  return (
    <>
      <div className={styles.heading}>
        <h1>Upload</h1>
      </div>
      <div className={styles.underline}></div>
    </>
  );
}

export default UploadHeading;