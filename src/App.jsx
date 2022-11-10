import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePage/Home1";
import Home2 from "./pages/homePage/Home2";
import Home3 from "./pages/homePage/Home3";
import Blogdefault from "./pages/BlogPost/BlogDefault";
import BlogGridV1 from "./pages/BlogPost/BlogGridV1";
import BlogGridV2 from "./pages/BlogPost/BlogGridV2";
import BlogList from "./pages/BlogPost/BlogList";
import Blogdetail from "./pages/BlogPost/Blogdetail";
import Nav from "./components/nav";
import BuyCryptoSelect from "./pages/buyPages/Buy-Crypto-Select";
import Footer from "./components/Footer";
import Profile from "./pages/userProfile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";

import BuyCryptoConfirm from "./pages/buyPages/Buy-Crypto-Confirm";
import BuyCryptoDetails from "./pages/buyPages/Buy-Crypto-Details";

import Market from "./pages/Market";
import SellSelect from "./pages/SellPages/SellSelect";
import SellCryptoAmount from "./pages/SellPages/Sell-Crypto-Amount";
import SellCryptoDetails from "./pages/SellPages/Sell-Crypto-Details";
import SellCryptoConfirm from "./pages/SellPages/Sell-Crypto-Confirm";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { apolloClient } from "./util/apolloConfig";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home1 />} />
          <Route path="/Home1" element={<Home2 />} />
          {/* BuyCryptoSelect */}
          <Route path="/BuyCryptoSelect" element={<BuyCryptoSelect />} />
          {/* profile */}
          <Route path="/profile/*" element={<Profile />} />
          {/* login page */}
          <Route path="/login" element={<Login />} />
          {/* register */}
          <Route path="/register" element={<Register />} />
          {/* contact */}
          <Route path="/contact" element={<Contact />} />
          {/* faq */}
          <Route path="/faq" element={<Faq />} />
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
          <Route path="/sellselect" element={<SellSelect />} />
          <Route path="/sellcryptoamount" element={<SellCryptoAmount />} />
          <Route path="/sellcryptodetails" element={<SellCryptoDetails />} />
          <Route path="/sellcryptoconfirm" element={<SellCryptoConfirm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
