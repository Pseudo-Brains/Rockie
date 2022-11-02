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
import SellSelect from "./pages/SellPages/SellSelect";
import SellCryptoAmount from "./pages/SellPages/Sell-Crypto-Amount";
import SellCryptoDetails from "./pages/SellPages/Sell-Crypto-Details";
import SellCryptoConfirm from "./pages/SellPages/Sell-Crypto-Confirm";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/blogdefault" element={<Blogdefault />} />
        <Route path="/blogdefaultV1" element={<BlogGridV1 />} />
        <Route path="/blogdefaultV2" element={<BlogGridV2 />} />
        <Route path="/blogdetail" element={<Blogdetail />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/buyryptoselect" element={<BuyCryptoSelect />} />
        <Route path="/buyryptoconfirm" element={<BuyCryptoConfirm />} />
        <Route path="/buyryptodetails" element={<BuyCryptoDetails />} />
        <Route path="/sellselect" element={<SellSelect />} />
        <Route path="/sellcryptoamount" element={<SellCryptoAmount />} />
        <Route path="/sellcryptodetails" element={<SellCryptoDetails />} />
        <Route path="/sellcryptoconfirm" element={<SellCryptoConfirm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
