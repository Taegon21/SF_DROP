import styles from "./MypageBody.module.css";
import Storage from "./Storage";
import MyUpload from "./MyUpload";

function MypageBody() {
  return (
    <div className={styles.container}>
      <div className={styles.leftbody}>
        <h2>My Page</h2>
        <div className={styles.underline}></div>
        <div className={styles.leftbodycontent}>
          <h3>My Information</h3>
          <p>Username: </p>
          <p>Email: </p>
          <p>Phone Number: </p>
        </div>
      </div>
      <div className={styles.rightbody}>
        <Storage />
        <MyUpload />
        
      </div>
    </div>
  );
}

export default MypageBody;