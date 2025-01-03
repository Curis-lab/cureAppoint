"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const banner_1 = __importDefault(require("../components/banner"));
const hreader_1 = __importDefault(require("../components/hreader"));
const specility_menu_1 = __importDefault(require("../components/specility-menu"));
const top_doctors_1 = __importDefault(require("../components/top-doctors"));
function Home() {
    return (<div>
      <hreader_1.default />
      <specility_menu_1.default />
      <top_doctors_1.default />
      <banner_1.default />
    </div>);
}
exports.default = Home;
