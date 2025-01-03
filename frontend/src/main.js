"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("react-dom/client");
const App_tsx_1 = __importDefault(require("./App.tsx"));
require("./index.css");
const react_router_dom_1 = require("react-router-dom");
const app_context_tsx_1 = __importDefault(require("./context/app-context.tsx"));
(0, client_1.createRoot)(document.getElementById("root")).render(<react_router_dom_1.BrowserRouter>
    <app_context_tsx_1.default>
      <App_tsx_1.default />
    </app_context_tsx_1.default>
  </react_router_dom_1.BrowserRouter>);
