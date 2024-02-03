import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
