import styles from "./UploadHeading.module.css";

function AuthHeading() {
  return (
    <>
      <div className={styles.heading}>
        <h1>인증번호 발급</h1>
      </div>
      <div className={styles.underline}></div>
    </>
  );
}

export default AuthHeading;
