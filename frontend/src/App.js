"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const home_1 = __importDefault(require("./pages/home"));
const doctors_1 = __importDefault(require("./pages/doctors"));
const login_1 = __importDefault(require("./pages/login"));
const about_1 = __importDefault(require("./pages/about"));
const contact_1 = __importDefault(require("./pages/contact"));
const my_profile_1 = __importDefault(require("./pages/my-profile"));
const my_appointments_1 = __importDefault(require("./pages/my-appointments"));
const appointment_1 = __importDefault(require("./pages/appointment"));
const navbar_1 = __importDefault(require("./components/navbar"));
const footer_1 = __importDefault(require("./components/footer"));
function App() {
    return (<div className="mx-4 sm:mx-[10%]">
      <navbar_1.default />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<home_1.default />}/>
        <react_router_dom_1.Route path="login" element={<login_1.default />}/>
        <react_router_dom_1.Route path="about" element={<about_1.default />}/>
        <react_router_dom_1.Route path="contact" element={<contact_1.default />}/>
        <react_router_dom_1.Route path="profile" element={<my_profile_1.default />}/>
        <react_router_dom_1.Route path="appointments" element={<my_appointments_1.default />}/>
        <react_router_dom_1.Route path="appointment/:docId" element={<appointment_1.default />}/>
        <react_router_dom_1.Route path="doctors" element={<doctors_1.default />}/>
        <react_router_dom_1.Route path="doctors/:speciality" element={<doctors_1.default />}/>
      </react_router_dom_1.Routes>
      <footer_1.default />
    </div>);
}
exports.default = App;
