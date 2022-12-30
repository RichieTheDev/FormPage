import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Submit from "./Submit";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App />} />
      <Route path={"/Submit"} element={<Submit />} />
    </Routes>
  </BrowserRouter>
);
