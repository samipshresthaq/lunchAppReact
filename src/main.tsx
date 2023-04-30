import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

import ColorMode from "./components/ColorMode/ColorMode";
import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ColorMode>
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <App></App>
      </StyledEngineProvider>
    </React.StrictMode>
  </ColorMode>
);
