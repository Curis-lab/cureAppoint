"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const app_context_1 = require("../context/app-context");
const verified_svg_1 = __importDefault(require("../assets/verified.svg"));
const relative_doctors_1 = __importDefault(require("../components/relative-doctors"));
function Appointment() {
    const { docId } = (0, react_router_dom_1.useParams)();
    const { doctors } = (0, react_1.useContext)(app_context_1.AppContext);
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const [docInfo, setDocInfo] = (0, react_1.useState)(null);
    const [docSlots, setDocSlots] = (0, react_1.useState)([]);
    const [slotIndex, setSlotIndex] = (0, react_1.useState)(0);
    const [slotTime, setSlotTime] = (0, react_1.useState)("");
    //I have to know which data
    //generate only slots
    const getAvailableSlots = () => __awaiter(this, void 0, void 0, function* () {
        setDocSlots([]);
        const today = new Date();
        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            const endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            }
            else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }
            const timeSlots = [];
            while (currentDate < endTime) {
                const formattedTime = currentDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime,
                });
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }
            setDocSlots((prev) => [...prev, timeSlots]);
        }
    });
    (0, react_1.useEffect)(() => {
        getAvailableSlots();
    }, [docInfo]);
    (0, react_1.useEffect)(() => {
        console.log(docSlots);
    }, []);
    const fetchDocInfo = () => __awaiter(this, void 0, void 0, function* () {
        const docInfo = doctors.find((doc) => doc._id === docId);
        setDocInfo(docInfo);
        return docInfo;
    });
    (0, react_1.useEffect)(() => {
        fetchDocInfo();
    }, [doctors, docId]);
    return (docInfo && (<div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt=""/>
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img src={verified_svg_1.default} className="w-5" alt="verfied"/>
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-600">
              Appointment fee:{" "}
              <span className="font-bold">${docInfo.fees}</span>
            </p>
          </div>
        </div>
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">

          {docSlots &&
            docSlots.map((slot, idx) => (<div key={idx} onClick={() => { setSlotIndex(idx); }} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === idx ? 'bg-primary text-white' : 'border border-gray-200'}`}>
                <p>{slot[0] && daysOfWeek[slot[0].datetime.getDay()]}</p>
                <p>{slot[0] && slot[0].datetime.getDate()}</p>
              </div>))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots && docSlots[slotIndex].map((item, idx) => (<p key={idx} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} onClick={() => setSlotTime(item.time)}>
                {item.time.toLowerCase()}
              </p>))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an appointment</button>
        </div>
        <relative_doctors_1.default docId={docId} speciality={docInfo.speciality}/>
      </div>));
}
exports.default = Appointment;
