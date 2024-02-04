import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Callback = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    const sendCodeToServer = async () => {
      if (code) {
        try {
          // FormData 객체 생성
          const formData = new URLSearchParams();
          formData.append('code', code);
          console.log("formData:", formData.toString()); // FormData 객체 로그 출력

          // 서버로 인가 코드 전송 및 응답 받기
          const response = await axios.post(
            "http://localhost:8000/auth/callback",
            formData.toString(), // FormData 객체를 문자열로 변환
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          console.log("서버로부터 받은 응답:", response.data); // 응답 로그 출력

          // 액세스 토큰과 리프레시 토큰을 로컬 스토리지에 저장
          localStorage.setItem("accessToken", response.data.access_token);
          localStorage.setItem("refreshToken", response.data.refresh_token);

          navigate("/"); // 인가 코드 전송 후 메인 페이지로 이동
        } catch (err) {
          console.error("서버 인증 오류:", err);
          // 오류 처리 로직
        }
      }
    };

    sendCodeToServer();
  }, [code, navigate]);

  return null; // 로딩 스피너 등 사용자에게 보여줄 컴포넌트를 여기에 추가할 수 있습니다.
};

export default Callback;
