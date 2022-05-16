import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// everything here will render in brows
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
