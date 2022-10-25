import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePage/Home1";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home1 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
