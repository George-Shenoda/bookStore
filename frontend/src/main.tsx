import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SnackbarProvider } from "notistack";
import App from "./App";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <SnackbarProvider>
            <App />
        </SnackbarProvider>
    </BrowserRouter>,
);
