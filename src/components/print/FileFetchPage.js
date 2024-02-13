import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authCodeState } from "../../atoms";
import { filesState } from "../../atoms";
import styles from "./FileFetchPage.module.css";
import sfdrop_green from "../../assets/sfdrop_green.png";
import onefileicon from "../../assets/onefileicon.png";


const FileFetchPage = () => {
  const authCode = useRecoilValue(authCodeState);
  const files = useRecoilValue(filesState); // 파일 목록 상태 가져옴

  useEffect(() => {}, [authCode]);

  const isPdfFile = (filename) => /\.pdf$/i.test(filename);


  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <img src={sfdrop_green} alt="sfdrop_green" className={styles.logo} />
        <div className={styles.filecontainer}>
          {files.length > 0 ? (
            files.map((file, index) => (
              <div key={index} className={styles.fileItem}>
                <div className={styles.fileandicon}>
                  <img
                    src={onefileicon}
                    alt="onefileicon"
                    className={styles.onefileicon}
                  />
                  <span className={styles.fileName}>{file}</span>
                </div>
                {isPdfFile(file) ? (
                  <button
                    className={styles.button}
                    onClick={() =>
                      window.open(
                        `http://localhost:8000/files/${authCode}/${file}`,
                        "_blank"
                      )
                    }
                  >
                    미리보기
                  </button>
                ) : (
                  <button
                    className={styles.button}
                    onClick={() =>
                      (window.location.href = `http://localhost:8000/files/${authCode}/${file}`)
                    }
                  >
                    미리보기
                  </button>
                )}
              </div>
            ))
          ) : (
            <div>No files found.</div>
          )}
        </div>
        {/* <button className={styles.button}>전체 인쇄</button> */}
      </div>
    </div>
  );
};

export default FileFetchPage;
