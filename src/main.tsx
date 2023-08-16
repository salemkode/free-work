import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./assets/theme.css";
import { enableLegendStateReact } from "@legendapp/state/react";
enableLegendStateReact();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
