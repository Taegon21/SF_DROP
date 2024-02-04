import styles from "./MypageHeading.module.css";

function MyPageHeading() {
  return (
    <>
      <div className={styles.heading}>
        <h1>My Page</h1>
      </div>
      <div className={styles.underline}></div>
    </>
  );
}

export default MyPageHeading;
