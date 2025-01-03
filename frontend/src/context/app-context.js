"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContext = void 0;
const react_1 = require("react");
const assets_1 = require("../assets/assets");
exports.AppContext = (0, react_1.createContext)({});
const AppContextProvider = (props) => {
    const value = { doctors: assets_1.doctors };
    return (<exports.AppContext.Provider value={value}>{props.children}</exports.AppContext.Provider>);
};
exports.default = AppContextProvider;
