import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterPage from "./components/FooterPage";
import HeaderPage from "./components/HeaderPage";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
