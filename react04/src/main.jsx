import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/index.css";

/*************  ✨ Codeium Command 🌟  *************/
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);