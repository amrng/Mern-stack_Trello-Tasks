import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import TokenContextProvider from "./Context/token";
import { Provider } from "react-redux";
import { store } from "./components/Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TokenContextProvider>
        <App />
      </TokenContextProvider>
    </Provider>
  </React.StrictMode>
);
