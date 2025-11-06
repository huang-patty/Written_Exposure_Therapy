/**
 * File: src/main.tsx
 * Purpose: Application entrypoint — mounts the React application into the DOM.
 *
 * Influenced by:
 *  - react-dom/client: createRoot
 *  - App component (./App.tsx)
 *  - Global styles (./index.css)
 *
 * Influences:
 *  - Boots the React app by rendering <App/> into the #root element.
 *
 * Notes:
 *  - Non-functional header added for documentation only.
 */

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
