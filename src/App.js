import { Routes, Route } from "react-router-dom";

import "./styles/global.css";

import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<Search />} />
  </Routes>
);

export default App;
