import KakaoLoginButton from "../components/login/KakaoLoginButton";
import LogoutButton from "../components/login/LogoutButton";

function UserSign() {
  return (
    <>
      <div>
        <h1>User Sign</h1>
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
