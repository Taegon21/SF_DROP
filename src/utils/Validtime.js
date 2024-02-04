import UploadTimeDiff from "./UploadTimeDiff";

const Validtime = ({ authCode }) => {
  const uploadTimeDiff = UploadTimeDiff(authCode);

  return (
    <div>
      <p>Uploaded: {uploadTimeDiff}</p>
    </div>
  );
};

export default Validtime;