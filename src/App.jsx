import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePage/Home1";
import Home2 from "./pages/homePage/Home2";
import Nav from "./components/nav";
import BuyCryptoSelect from "./pages/buyPages/Buy-Crypto-Select";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home1 />} />
        <Route path="/Home1" element={<Home2 />} />
        {/* BuyCryptoSelect */}
        <Route path="/BuyCryptoSelect" element={<BuyCryptoSelect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
