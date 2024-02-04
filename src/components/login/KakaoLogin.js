
const redirect_uri = process.env.REACT_APP_REDIRECT_URL;
const response_type = "code";
const client_id = "87f533065705bc990eb8859ade712a05";

const KakaoLogin = () => {
  const authParam = new URLSearchParams({
    client_id,
    redirect_uri,
    response_type,
  });

  return (
    <a href={`https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`}>
      Kakao로 로그인하기
    </a>
  );
};

export default KakaoLogin;
