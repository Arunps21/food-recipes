import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterPage from "./components/FooterPage";
import HeaderPage from "./components/HeaderPage";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import RecipeView from "./components/RecipeView";
import { ComponentProvider } from "./components/ComponentProvider";

function App() {
  return (
    <>
      <ComponentProvider>
        <HeaderPage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/RecipeView/:id" element={<RecipeView />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <FooterPage />
      </ComponentProvider>
    </>
  );
}

export default App;
