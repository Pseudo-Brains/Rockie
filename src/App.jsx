import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePage/Home1";
import Nav from "./components/nav";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home1 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
