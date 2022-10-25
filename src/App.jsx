import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
