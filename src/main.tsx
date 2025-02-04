import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./route.tsx";

import { GlobalStyles } from "./theme/global.ts";
import { ThemeProviderWrapper } from "./store/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <GlobalStyles />
      <App />
    </ThemeProviderWrapper>
  </StrictMode>
);
