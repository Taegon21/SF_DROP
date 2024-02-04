import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Mypage from "./pages/Mypage";
import UserSign from "./pages/UserSign";
import Uploadcomplete from "./pages/Uploadcomplete";
import Print from "./pages/Print";
import Callback from "./components/login/Callback";

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
          <Route path="uploadcomplete">
            <Route index element={<Uploadcomplete />}></Route>
          </Route>
          <Route path="mypage">
            <Route index element={<Mypage />}></Route>
          </Route>
          <Route path="print">
            <Route index element={<Print />}></Route>
          </Route>
          <Route path="callback">
            <Route index element={<Callback />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
