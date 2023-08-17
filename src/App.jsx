import Home from "./pages/Home.jsx";
import MainTheme from "./components/MainTheme.jsx";
import Layout from "./pages/Layout.jsx";
import About from "./pages/About.jsx";
import JoinUsPage from "./pages/JoinUsPage.jsx";
import SponsorsPage from "./pages/SponsorsPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="joinus" element={<JoinUsPage />} />
            <Route path="sponsors" element={<SponsorsPage />} />
            <Route path="tedxqu" element={<JoinUsPage />} />
            <Route path="MainTheme" element={<MainTheme />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
