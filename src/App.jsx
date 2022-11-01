import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePage/Home1";
import Home2 from "./pages/homePage/Home2";
import Home3 from "./pages/homePage/Home3";
import Nav from "./components/nav";
import BuyCryptoSelect from "./pages/buyPages/Buy-Crypto-Select";
import Footer from "./components/Footer";
import Market from "./pages/Market"
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home1 />} />
        <Route path="/Home1" element={<Home2 />} />
        <Route path="/Home3" element={<Home3 />} />
        {/* BuyCryptoSelect */}
        <Route path="/BuyCryptoSelect" element={<BuyCryptoSelect />} />
        <Route path="/markets" element={<Market />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
