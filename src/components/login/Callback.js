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
          const formData = new URLSearchParams();
          formData.append("code", code);
          console.log("formData:", formData.toString());

          const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/auth/callback`,
            formData.toString(), // FormData 객체를 문자열로 변환
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );
          console.log("서버로부터 받은 응답:", response.data);

          localStorage.setItem("accessToken", response.data.access_token);
          localStorage.setItem("ID", response.data.user_id);
          localStorage.setItem("nickname", response.data.nickname);

          navigate("/upload");
        } catch (err) {
          console.error("서버 인증 오류:", err);
          // 오류 처리 로직
        }
      }
    };

    sendCodeToServer();
  }, [code, navigate]);

  return null;
};

export default Callback;
