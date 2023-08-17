import Home from "./pages/Home.jsx";
import MainTheme from "./components/MainTheme.jsx";
import Layout from "./pages/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="MainTheme" element={<MainTheme />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
