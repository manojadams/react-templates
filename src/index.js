import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = document.getElementById("app");
if (root) {
    const app = createRoot(root);
    app.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
      );
}