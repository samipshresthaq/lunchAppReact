import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

import ColorMode from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ColorMode />
    </StyledEngineProvider>
  </React.StrictMode>
);
