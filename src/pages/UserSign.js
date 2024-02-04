import KakaoLoginButton from "../components/login/KakaoLoginButton";
import KakaoLogin from "../components/login/KakaoLogin";
import LogoutButton from "../components/login/LogoutButton";

function UserSign() {
  return (
    <>
      <div>
        <h1>User Sign</h1>
      </div>
      <div>
        <KakaoLogin />
      </div>
      <div>
      <KakaoLoginButton />
      </div>
      <div>
        <LogoutButton />
      </div>
    </>
  );
}

export default UserSign;
