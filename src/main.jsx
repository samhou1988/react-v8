import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
// function bootstrap() {
const root = createRoot(document.getElementById("app"));
root.render(<App />);
// }

// bootstrap();
