import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import Login from "../pages/Login";
import Private from "./private";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Private />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
