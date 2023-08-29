import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import About from "./pages/About.jsx";
import JoinUsPage from "./pages/JoinUsPage.jsx";
import SponsorsPage from "./pages/SponsorsPage.jsx";
import TEDxQU from "./pages/TEDxQU.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/TEDxQu/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/TEDxQu/about" element={<About />} />
            <Route path="/TEDxQu/joinus" element={<JoinUsPage />} />
            <Route path="/TEDxQu/sponsors" element={<SponsorsPage />} />
            {/* <Route path="tedxqu" element={<TEDxQU />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
