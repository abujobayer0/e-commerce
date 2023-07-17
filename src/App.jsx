import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SellerPanel from "./pages/SellerPanel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/seller" element={<SellerPanel />}></Route>
      </Routes>
    </>
  );
}

export default App;
