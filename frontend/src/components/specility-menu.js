"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const assets_1 = require("../assets/assets");
function SpecilityMenu() {
    return (<div className="flex flex-col items-center gap-4 py-16 text-gray-800" id="speciality">
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply brosew throught our extendive list of trusted, sheudl our
        appointement
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {assets_1.specialityData.map((item, index) => (<react_router_dom_1.Link key={index} onClick={() => scrollTo(0, 0)} to={`/doctors/${item.speciality}`} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
                <img className="w-16 sm:w-24 mb-2" src={item.image} alt=""/>
                <p>{item.speciality}</p>
            </react_router_dom_1.Link>))}
      </div>
    </div>);
}
exports.default = SpecilityMenu;
