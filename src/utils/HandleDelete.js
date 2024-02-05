import axios from "axios";

export const handleDelete = async (authCode, setGroupedFiles) => {
  // 사용자에게 삭제 여부를 확인
  const isConfirmed = window.confirm("이 파일을 정말로 삭제하시겠습니까?");

  if (isConfirmed) {
    try {
      await axios.delete(`http://localhost:8000/delete_files/${authCode}`);
      // 성공적으로 삭제 후 상태 업데이트
      setGroupedFiles((prevFiles) =>
        Object.fromEntries(
          Object.entries(prevFiles).filter(([key]) => key !== authCode)
        )
      );
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error("Error deleting files", error);
      // 여기에 에러 처리 로직을 추가할 수 있습니다.
    }
  } else {
    // 사용자가 삭제를 취소한 경우, 아무 것도 하지 않음
    console.log("File deletion cancelled.");
  }
};
