import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TransactionProvider } from "./context/TransactionContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // After using TransactionProvider, now our entire application will
  // have access to the data provided via the context using " value = {{value: 'xyz'}}" from the TransactionContext.jsx file
  <TransactionProvider>
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>
  </TransactionProvider>
);
