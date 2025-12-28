import React from "react";
import ReactDOM from "react-dom/client";

import App from "./component/App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// reportWebVitals();
