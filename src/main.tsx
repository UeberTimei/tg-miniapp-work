import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";

createRoot(document.getElementById("root")!).render(
  <WebAppProvider>
    <App />
  </WebAppProvider>
);
