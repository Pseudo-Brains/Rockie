import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePage/Home1";
import Home2 from "./pages/homePage/Home2";
import Nav from "./components/nav";
import BuyCryptoSelect from "./pages/buyPages/Buy-Crypto-Select";
import Footer from "./components/Footer";
import Profile from "./pages/userProfile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";

function App() {
  return (
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
