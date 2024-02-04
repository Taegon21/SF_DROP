import axios from "axios";

export const handleDelete = async (authCode, setGroupedFiles) => {
  try {
    await axios.delete(`http://localhost:8000/delete_files/${authCode}`);
    // 성공적으로 삭제 후 상태 업데이트
    setGroupedFiles((prevFiles) =>
      Object.fromEntries(
        Object.entries(prevFiles).filter(([key]) => key !== authCode)
      )
    );
  } catch (error) {
    console.error("Error deleting files", error);
    // 여기에 에러 처리 로직을 추가할 수 있습니다.
  }
};
