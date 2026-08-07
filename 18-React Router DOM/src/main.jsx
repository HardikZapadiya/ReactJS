import "./index.css";
import reactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

reactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
