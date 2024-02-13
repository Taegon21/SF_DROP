import axios from "axios";

export const handleDelete = async (authCode, setGroupedFiles) => {
  const isConfirmed = window.confirm("이 파일을 정말로 삭제하시겠습니까?");

  if (isConfirmed) {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/delete_files/${authCode}`
      );

      setGroupedFiles((prevFiles) =>
        Object.fromEntries(
          Object.entries(prevFiles).filter(([key]) => key !== authCode)
        )
      );
      window.location.reload(); 
    } catch (error) {
      console.error("Error deleting files", error);
    }
  } else {
    console.log("File deletion cancelled.");
  }
};
