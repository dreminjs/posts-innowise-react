import React from "react";
import { createRoot } from "react-dom/client";
import { RootProvider } from "./RootProvider";
import "../styles/styles.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <RootProvider />
    </React.StrictMode>,
  );
}
