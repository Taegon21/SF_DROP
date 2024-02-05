import styles from "./MypageBody.module.css";
import Storage from "./Storage";
import MyUpload from "./MyUpload";
import ProfileBar from "./ProfileBar";

function MypageBody() {
  return (
    <div className={styles.container}>
      <div className={styles.leftbody}>
        <ProfileBar />
      </div>
      <div className={styles.rightbody}>
          <Storage />
          <MyUpload />
      </div>
    </div>
  );
}

export default MypageBody;