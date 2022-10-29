import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePage/Home1";
import Home2 from "./pages/homePage/Home2";
import Blogdefault from "./pages/BlogPost/BlogDefault";
import BlogGridV1 from "./pages/BlogPost/BlogGridV1";
import BlogGridV2 from "./pages/BlogPost/BlogGridV2";
import BlogList from "./pages/BlogPost/BlogList";
import Blogdetail from "./pages/BlogPost/Blogdetail";
import Nav from "./components/nav";
import BuyCryptoSelect from "./pages/buyPages/Buy-Crypto-Select";
import Footer from "./components/Footer";
import BuyCryptoConfirm from "./pages/buyPages/Buy-Crypto-Confirm";
import BuyCryptoDetails from "./pages/buyPages/Buy-Crypto-Details";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home1 />} />
        <Route path="/Home1" element={<Home2 />} />
        <Route path="/Blogdefault" element={<Blogdefault />} />
        <Route path="/BlogdefaultV1" element={<BlogGridV1 />} />
        <Route path="/BlogdefaultV2" element={<BlogGridV2 />} />
        <Route path="/Blogdetail" element={<Blogdetail />} />
        <Route path="/BlogList" element={<BlogList />} />
        <Route path="/BuyCryptoSelect" element={<BuyCryptoSelect />} />
        <Route path="/BuyCryptoConfirm" element={<BuyCryptoConfirm />} />
        <Route path="/BuyCryptoDetails" element={<BuyCryptoDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
