import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import About from "./pages/About.jsx";
import JoinUsPage from "./pages/JoinUsPage.jsx";
import SponsorsPage from "./pages/SponsorsPage.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter  >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="joinus" element={<JoinUsPage />} />
            <Route path="sponsors" element={<SponsorsPage />} />
            {/* <Route path="tedxqu" element={<TEDxQU />} /> */}
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
