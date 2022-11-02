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
import Home3 from "./pages/homePage/Home3";
import Market from "./pages/Market"
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/blogdefault" element={<Blogdefault />} />
        <Route path="/blogdefaultV1" element={<BlogGridV1 />} />
        <Route path="/blogdefaultV2" element={<BlogGridV2 />} />
        <Route path="/blogdetail" element={<Blogdetail />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/market/*" element={<Market />} />
        <Route path="/buyryptoselect" element={<BuyCryptoSelect />} />
        <Route path="/buyryptoconfirm" element={<BuyCryptoConfirm />} />
        <Route path="/buyryptodetails" element={<BuyCryptoDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
