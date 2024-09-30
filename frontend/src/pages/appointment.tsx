import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext, DoctorsType } from "../context/app-context";
import verfied from "../assets/verified.svg";
import RelativeDoctors from "../components/relative-doctors";

function Appointment() {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState<DoctorsType | null>(null);
  const [docSlots, setDocSlots] = useState<any[]>([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  //I have to know which data
  //generate only slots
  const getAvailableSlots = async () => {
    setDocSlots([]);
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots: any[] = [];
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
  };

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, []);
  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc: any) => doc._id === docId);
    setDocInfo(docInfo);
    return docInfo;
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img src={verfied} className="w-5" alt="verfied" />
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
            docSlots.map((slot: any, idx: number) => (
              <div key={idx} onClick={()=>{setSlotIndex(idx)}} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === idx ? 'bg-primary text-white':'border border-gray-200'}`}>
                <p>{slot[0] && daysOfWeek[slot[0].datetime.getDay()]}</p>
                <p>{slot[0] &&  slot[0].datetime.getDate()}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots && docSlots[slotIndex].map((item, idx)=>(
              <p className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white':'text-gray-400 border border-gray-300'}`} onClick={()=>setSlotTime(item.time)}>
                {item.time.toLowerCase()}
              </p>
            ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an appointment</button>
        </div>
        <RelativeDoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
    )
  );
}

export default Appointment;
