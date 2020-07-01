import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./contexts/auth";
import { LayoutProvider } from "./contexts/layout";

import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <LayoutProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </LayoutProvider>
    </BrowserRouter>
  );
}

export default App;
