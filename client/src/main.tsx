/*
 * DESIGN: Classy Blue — application entrypoint
 * Routing: preserve the public URL when GitHub Pages serves the SPA fallback document.
 */
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const GITHUB_PAGES_PATH_KEY = "mm-global-english:github-pages-path";

function restoreGitHubPagesRoute() {
  const pendingPath = window.sessionStorage.getItem(GITHUB_PAGES_PATH_KEY);
  if (!pendingPath) return;

  window.sessionStorage.removeItem(GITHUB_PAGES_PATH_KEY);
  window.history.replaceState(null, document.title, pendingPath);
}

restoreGitHubPagesRoute();
createRoot(document.getElementById("root")!).render(<App />);
