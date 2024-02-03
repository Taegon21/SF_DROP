import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Mypage from "./pages/Mypage";
import UserSign from "./pages/UserSign";

function Main() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home">
            <Route index element={<Home />}></Route>
          </Route>
          <Route path="usersign">
            <Route index element={<UserSign />}></Route>
          </Route>
          <Route path="upload">
            <Route index element={<Upload />}></Route>
          </Route>
          <Route path="mypage">
            <Route index element={<Mypage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
