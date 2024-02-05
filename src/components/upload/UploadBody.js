import styles from "./UploadBody.module.css;

function UploadBody() {
  return (
    <div className={styles.container}>
      <UploadHeading />
      <UploadForm />
    </div>
  );
}