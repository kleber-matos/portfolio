import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import VerMais from "../pages/VerMais";
import Err from "../pages/Err";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<VerMais />} path="/vermais" />
        <Route element={<Err />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
