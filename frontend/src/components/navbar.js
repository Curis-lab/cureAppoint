"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const med_svg_1 = __importDefault(require("../assets/med.svg"));
const profilePic_jpeg_1 = __importDefault(require("../assets/profilePic.jpeg"));
const down_svg_1 = __importDefault(require("../assets/down.svg"));
const react_1 = require("react");
function Navbar() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    // const [showMenu, setShowMenu] = useState<boolean>(false);
    const [token, setToken] = (0, react_1.useState)(true);
    return (<div className="flex items-center justify-between text-sm py-4 mb-5 border-b-2 border-gray-400">
      <div className="flex items-center justify-center" onClick={() => navigate("/")}>
        <img className="w-16 cursor-pointer" src={med_svg_1.default} alt=""/>
        <p className="text-xl hidden md:block">CureAppoint</p>
      </div>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <react_router_dom_1.NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </react_router_dom_1.NavLink>
        <react_router_dom_1.NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </react_router_dom_1.NavLink>
        <react_router_dom_1.NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </react_router_dom_1.NavLink>
        <react_router_dom_1.NavLink to="/contact">
          <li className="py-1">CONTACTS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </react_router_dom_1.NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (<div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={profilePic_jpeg_1.default} alt="" className="w-8 rounded-full"/>
            <img className="w-2.5" src={down_svg_1.default} alt=""/>
            <div className="absolute top-3 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => {
                navigate("/profile");
            }} className="hover:text-black cursor-pointer">
                  My Profile
                </p>
                <p onClick={() => {
                navigate("/appointments");
            }} className="hover:text-black cursor-pointer">
                  My Appointment
                </p>
                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>) : (<button onClick={() => navigate("/login")} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">
            Create account
          </button>)}
      </div>
    </div>);
}
exports.default = Navbar;
